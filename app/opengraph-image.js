import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ alignItems: 'center', background: '#0B1F33', color: '#FFFFFF', display: 'flex', height: '100%', padding: '72px', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ color: '#E7B84B', fontSize: '36px', fontWeight: 700 }}>KIBRIS TAKSİ 24</div>
          <div style={{ fontSize: '72px', fontWeight: 800, lineHeight: 1.05 }}>KKTC Taksi &amp; Transfer</div>
          <div style={{ color: '#E5E7EB', fontSize: '32px' }}>7/24 havalimanı, şehir içi ve özel transfer hizmeti</div>
        </div>
      </div>
    ),
    size
  )
}
