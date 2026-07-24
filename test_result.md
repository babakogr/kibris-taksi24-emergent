#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

user_problem_statement: "KKTC premium taksi & transfer rezervasyon platformu (kibristaksi24.com). SEO odaklı, çok sayfalı Next.js sitesi. Rezervasyonlar WhatsApp'a yönlenir ve backend'e lead olarak kaydedilir. İletişim formu backend'e kaydedilir."

backend:
  - task: "Reservation lead API (POST /api/reservations)"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "POST /api/reservations creates a reservation lead in MongoDB with UUID id. Validates required fields from/to (400 if missing). Fields: from,to,date,time,retDate,retTime,pax,bags,child,name,trip. Returns 201 with clean object (no _id). GET /api/reservations lists leads sorted by createdAt desc."
        -working: true
        -agent: "testing"
        -comment: "✅ All tests passed. POST /api/reservations correctly creates reservations with UUID v4 ids (no MongoDB _id exposed). Tested oneWay and roundTrip scenarios - field mapping works correctly (pax→passengers, bags→luggage, retDate→returnDate, retTime→returnTime). Validation returns 400 for missing from/to fields. GET /api/reservations returns array with proper data structure. CORS headers present. Status 201 for creation, 200 for listing."
  - task: "Contact message API (POST /api/contact)"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "POST /api/contact stores a contact message in MongoDB with UUID id. Validates required fields name & message (400 if missing). Returns 201 with clean object."
        -working: true
        -agent: "testing"
        -comment: "✅ All tests passed. POST /api/contact correctly creates contact messages with UUID v4 ids (no MongoDB _id exposed). All fields (name, phone, email, message, createdAt) stored and returned correctly. Validation returns 400 for missing name or message fields. CORS headers present. Status 201 for successful creation."
  - task: "Root API health (GET /api/root)"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "low"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "GET /api/root and GET /api/ return a JSON health message."
        -working: true
        -agent: "testing"
        -comment: "✅ Both endpoints tested and working. GET /api/root and GET /api/ both return 200 status with JSON containing 'message' field ('Kıbrıs Taksi 24 API'). CORS headers present."

frontend:
  - task: "Public site (home, city/route landing pages, booking widget, blog, contact)"
    implemented: true
    working: "NA"
    file: "app/page.js, app/[slug]/page.js, components/site/*"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
        -working: "NA"
        -agent: "main"
        -comment: "Frontend built. Not yet tested by automation (awaiting user permission)."

metadata:
  created_by: "main_agent"
  version: "1.0"
  test_sequence: 1
  run_ui: false

test_plan:
  current_focus: []
  stuck_tasks: []
  test_all: false
  test_priority: "high_first"

agent_communication:
    -agent: "main"
    -message: "Backend has 3 endpoints under the Next.js catch-all route (/api/reservations POST+GET, /api/contact POST, /api/root GET). Please test CRUD + validation (missing from/to -> 400 for reservations; missing name/message -> 400 for contact). Ensure UUIDs used (no Mongo _id in responses). MongoDB uses MONGO_URL and DB_NAME from env. Do NOT test frontend yet."
    -agent: "testing"
    -message: "✅ Backend testing complete - ALL TESTS PASSED (6/6). Tested all 3 API endpoints: 1) Root health endpoints (GET /api/root, GET /api/) return 200 with message. 2) Reservation API: POST creates with UUID (oneWay & roundTrip tested), validates from/to (400 on missing), GET lists all with proper structure. 3) Contact API: POST creates with UUID, validates name/message (400 on missing). All responses use UUID v4 (no MongoDB _id exposed), CORS headers present, field mapping correct. Backend is production-ready."
