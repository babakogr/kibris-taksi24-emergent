#!/usr/bin/env python3
"""
Backend API Tests for Kıbrıs Taksi 24 Platform
Tests all endpoints under /api prefix
"""

import requests
import json
import re
from datetime import datetime

# Base URL from environment
BASE_URL = "https://transfer-central-7.preview.emergentagent.com/api"

def is_valid_uuid(uuid_string):
    """Check if string is a valid UUID v4"""
    uuid_pattern = re.compile(r'^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', re.I)
    return bool(uuid_pattern.match(uuid_string))

def check_cors_headers(response):
    """Verify CORS headers are present"""
    headers = response.headers
    has_cors = 'Access-Control-Allow-Origin' in headers
    return has_cors

def test_root_endpoints():
    """Test GET /api/root and GET /api/"""
    print("\n" + "="*80)
    print("TEST 1: Root API Health Endpoints")
    print("="*80)
    
    try:
        # Test GET /api/root
        print("\n[1.1] Testing GET /api/root...")
        response = requests.get(f"{BASE_URL}/root", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert 'message' in data, "Response should contain 'message' field"
        assert check_cors_headers(response), "CORS headers missing"
        print("✅ GET /api/root passed")
        
        # Test GET /api/
        print("\n[1.2] Testing GET /api/...")
        response = requests.get(f"{BASE_URL}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert 'message' in data, "Response should contain 'message' field"
        assert check_cors_headers(response), "CORS headers missing"
        print("✅ GET /api/ passed")
        
        return True
    except Exception as e:
        print(f"❌ Root endpoints test failed: {str(e)}")
        return False

def test_create_reservation_valid():
    """Test POST /api/reservations with valid data"""
    print("\n" + "="*80)
    print("TEST 2: Create Reservation - Valid Data")
    print("="*80)
    
    try:
        # Test oneWay reservation
        print("\n[2.1] Testing POST /api/reservations (oneWay)...")
        payload = {
            "from": "Ercan Havalimanı",
            "to": "Girne (Kyrenia)",
            "date": "2025-07-10",
            "time": "14:30",
            "trip": "oneWay",
            "pax": "3",
            "bags": "2",
            "child": True,
            "name": "Ahmet Yılmaz"
        }
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(f"{BASE_URL}/reservations", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 201, f"Expected 201, got {response.status_code}"
        data = response.json()
        
        # Verify UUID id
        assert 'id' in data, "Response should contain 'id' field"
        assert is_valid_uuid(data['id']), f"Invalid UUID format: {data.get('id')}"
        print(f"✓ Valid UUID: {data['id']}")
        
        # Verify no _id field
        assert '_id' not in data, "Response should not contain MongoDB '_id' field"
        print("✓ No MongoDB _id in response")
        
        # Verify fields
        assert data['from'] == payload['from'], "from field mismatch"
        assert data['to'] == payload['to'], "to field mismatch"
        assert data['passengers'] == payload['pax'], "passengers field mismatch"
        assert data['luggage'] == payload['bags'], "luggage field mismatch"
        assert data['childSeat'] == True, "childSeat should be true"
        assert data['tripType'] == 'oneWay', "tripType should be oneWay"
        assert data['status'] == 'new', "status should be 'new'"
        assert 'createdAt' in data, "createdAt field missing"
        print("✓ All fields correctly mapped")
        
        # Verify CORS
        assert check_cors_headers(response), "CORS headers missing"
        print("✓ CORS headers present")
        
        print("✅ POST /api/reservations (oneWay) passed")
        
        # Test roundTrip reservation
        print("\n[2.2] Testing POST /api/reservations (roundTrip)...")
        payload_round = {
            "from": "Larnaka Havalimanı",
            "to": "Lefkoşa (Nicosia)",
            "date": "2025-08-15",
            "time": "10:00",
            "retDate": "2025-08-20",
            "retTime": "16:00",
            "trip": "roundTrip",
            "pax": "2",
            "bags": "1",
            "child": False,
            "name": "Mehmet Öz"
        }
        print(f"Payload: {json.dumps(payload_round, indent=2)}")
        
        response = requests.post(f"{BASE_URL}/reservations", json=payload_round, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 201, f"Expected 201, got {response.status_code}"
        data = response.json()
        
        assert is_valid_uuid(data['id']), "Invalid UUID"
        assert '_id' not in data, "MongoDB _id should not be exposed"
        assert data['returnDate'] == payload_round['retDate'], "returnDate field mismatch"
        assert data['returnTime'] == payload_round['retTime'], "returnTime field mismatch"
        assert data['tripType'] == 'roundTrip', "tripType should be roundTrip"
        print("✓ Round trip fields correctly mapped")
        
        print("✅ POST /api/reservations (roundTrip) passed")
        
        return True
    except Exception as e:
        print(f"❌ Create reservation test failed: {str(e)}")
        return False

def test_create_reservation_validation():
    """Test POST /api/reservations validation"""
    print("\n" + "="*80)
    print("TEST 3: Create Reservation - Validation")
    print("="*80)
    
    try:
        # Test missing 'from' field
        print("\n[3.1] Testing POST /api/reservations (missing 'from')...")
        payload = {
            "to": "Girne (Kyrenia)",
            "date": "2025-07-10",
            "time": "14:30"
        }
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(f"{BASE_URL}/reservations", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"
        data = response.json()
        assert 'error' in data, "Error response should contain 'error' field"
        print(f"✓ Validation error: {data['error']}")
        print("✅ Missing 'from' validation passed")
        
        # Test missing 'to' field
        print("\n[3.2] Testing POST /api/reservations (missing 'to')...")
        payload = {
            "from": "Ercan Havalimanı",
            "date": "2025-07-10",
            "time": "14:30"
        }
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(f"{BASE_URL}/reservations", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"
        data = response.json()
        assert 'error' in data, "Error response should contain 'error' field"
        print(f"✓ Validation error: {data['error']}")
        print("✅ Missing 'to' validation passed")
        
        return True
    except Exception as e:
        print(f"❌ Reservation validation test failed: {str(e)}")
        return False

def test_list_reservations():
    """Test GET /api/reservations"""
    print("\n" + "="*80)
    print("TEST 4: List Reservations")
    print("="*80)
    
    try:
        print("\n[4.1] Testing GET /api/reservations...")
        response = requests.get(f"{BASE_URL}/reservations", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        
        assert isinstance(data, list), "Response should be an array"
        print(f"✓ Response is an array with {len(data)} items")
        
        if len(data) > 0:
            # Check first item
            item = data[0]
            print(f"First item: {json.dumps(item, indent=2, default=str)}")
            
            # Verify no _id in items
            assert '_id' not in item, "Items should not contain MongoDB '_id' field"
            print("✓ No MongoDB _id in items")
            
            # Verify UUID id exists
            assert 'id' in item, "Items should contain 'id' field"
            assert is_valid_uuid(item['id']), f"Invalid UUID in item: {item.get('id')}"
            print(f"✓ Valid UUID in item: {item['id']}")
            
            # Verify required fields
            assert 'from' in item, "Item should have 'from' field"
            assert 'to' in item, "Item should have 'to' field"
            assert 'status' in item, "Item should have 'status' field"
            assert 'createdAt' in item, "Item should have 'createdAt' field"
            print("✓ Required fields present")
        
        # Verify CORS
        assert check_cors_headers(response), "CORS headers missing"
        print("✓ CORS headers present")
        
        print("✅ GET /api/reservations passed")
        return True
    except Exception as e:
        print(f"❌ List reservations test failed: {str(e)}")
        return False

def test_create_contact_valid():
    """Test POST /api/contact with valid data"""
    print("\n" + "="*80)
    print("TEST 5: Create Contact Message - Valid Data")
    print("="*80)
    
    try:
        print("\n[5.1] Testing POST /api/contact...")
        payload = {
            "name": "Ahmet Yılmaz",
            "phone": "+905321112233",
            "email": "ahmet@example.com",
            "message": "Havalimanı transferi hakkında bilgi almak istiyorum."
        }
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(f"{BASE_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 201, f"Expected 201, got {response.status_code}"
        data = response.json()
        
        # Verify UUID id
        assert 'id' in data, "Response should contain 'id' field"
        assert is_valid_uuid(data['id']), f"Invalid UUID format: {data.get('id')}"
        print(f"✓ Valid UUID: {data['id']}")
        
        # Verify no _id field
        assert '_id' not in data, "Response should not contain MongoDB '_id' field"
        print("✓ No MongoDB _id in response")
        
        # Verify fields
        assert data['name'] == payload['name'], "name field mismatch"
        assert data['phone'] == payload['phone'], "phone field mismatch"
        assert data['email'] == payload['email'], "email field mismatch"
        assert data['message'] == payload['message'], "message field mismatch"
        assert 'createdAt' in data, "createdAt field missing"
        print("✓ All fields correctly stored")
        
        # Verify CORS
        assert check_cors_headers(response), "CORS headers missing"
        print("✓ CORS headers present")
        
        print("✅ POST /api/contact passed")
        return True
    except Exception as e:
        print(f"❌ Create contact test failed: {str(e)}")
        return False

def test_create_contact_validation():
    """Test POST /api/contact validation"""
    print("\n" + "="*80)
    print("TEST 6: Create Contact Message - Validation")
    print("="*80)
    
    try:
        # Test missing 'name' field
        print("\n[6.1] Testing POST /api/contact (missing 'name')...")
        payload = {
            "phone": "+905321112233",
            "email": "test@example.com",
            "message": "Test message"
        }
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(f"{BASE_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"
        data = response.json()
        assert 'error' in data, "Error response should contain 'error' field"
        print(f"✓ Validation error: {data['error']}")
        print("✅ Missing 'name' validation passed")
        
        # Test missing 'message' field
        print("\n[6.2] Testing POST /api/contact (missing 'message')...")
        payload = {
            "name": "Ahmet Yılmaz",
            "phone": "+905321112233",
            "email": "test@example.com"
        }
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(f"{BASE_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 400, f"Expected 400, got {response.status_code}"
        data = response.json()
        assert 'error' in data, "Error response should contain 'error' field"
        print(f"✓ Validation error: {data['error']}")
        print("✅ Missing 'message' validation passed")
        
        return True
    except Exception as e:
        print(f"❌ Contact validation test failed: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("\n" + "="*80)
    print("KKTC TAKSI 24 - BACKEND API TEST SUITE")
    print("="*80)
    print(f"Base URL: {BASE_URL}")
    print(f"Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    results = {
        "Root endpoints": test_root_endpoints(),
        "Create reservation (valid)": test_create_reservation_valid(),
        "Create reservation (validation)": test_create_reservation_validation(),
        "List reservations": test_list_reservations(),
        "Create contact (valid)": test_create_contact_valid(),
        "Create contact (validation)": test_create_contact_validation(),
    }
    
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{status}: {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    print(f"Test completed at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    if passed == total:
        print("\n🎉 All tests passed!")
        return 0
    else:
        print(f"\n⚠️  {total - passed} test(s) failed")
        return 1

if __name__ == "__main__":
    exit(main())
