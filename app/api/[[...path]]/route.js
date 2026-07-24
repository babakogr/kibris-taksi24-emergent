import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME)
  }
  return db
}

function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    if ((route === '/' || route === '/root') && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'Kıbrıs Taksi 24 API' }))
    }

    // Create reservation lead - POST /api/reservations
    if (route === '/reservations' && method === 'POST') {
      const body = await request.json()
      if (!body.from || !body.to) {
        return handleCORS(NextResponse.json({ error: 'from and to are required' }, { status: 400 }))
      }
      const doc = {
        id: uuidv4(),
        from: body.from,
        to: body.to,
        date: body.date || null,
        time: body.time || null,
        returnDate: body.retDate || null,
        returnTime: body.retTime || null,
        passengers: body.pax || null,
        luggage: body.bags || null,
        childSeat: !!body.child,
        tripType: body.trip || 'oneWay',
        name: body.name || null,
        status: 'new',
        createdAt: new Date(),
      }
      await db.collection('reservations').insertOne(doc)
      const { _id, ...clean } = doc
      return handleCORS(NextResponse.json(clean, { status: 201 }))
    }

    // List reservations - GET /api/reservations
    if (route === '/reservations' && method === 'GET') {
      const items = await db.collection('reservations').find({}).sort({ createdAt: -1 }).limit(500).toArray()
      const cleaned = items.map(({ _id, ...rest }) => rest)
      return handleCORS(NextResponse.json(cleaned))
    }

    // Contact message - POST /api/contact
    if (route === '/contact' && method === 'POST') {
      const body = await request.json()
      if (!body.name || !body.message) {
        return handleCORS(NextResponse.json({ error: 'name and message are required' }, { status: 400 }))
      }
      const doc = {
        id: uuidv4(),
        name: body.name,
        phone: body.phone || null,
        email: body.email || null,
        message: body.message,
        createdAt: new Date(),
      }
      await db.collection('contacts').insertOne(doc)
      const { _id, ...clean } = doc
      return handleCORS(NextResponse.json(clean, { status: 201 }))
    }

    return handleCORS(NextResponse.json({ error: `Route ${route} not found` }, { status: 404 }))
  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json({ error: 'Internal server error' }, { status: 500 }))
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute
