
Screenshots of sample CRUD operations:

**POST  (Create)**

![[Pasted image 20251117193759.png]]

**GET  (Read)**

![[Pasted image 20251117193839.png]]

**PUT (Update)**

![[Pasted image 20251117193937.png]]

**DELETE **

![[Pasted image 20251117194008.png]]
**FLOW OF DATA:**

CLIENT
   ↓
REQUEST
   ↓
express.json()
   ↓
ROUTE MATCHES
   ↓
VALIDATION MIDDLEWARE
   ↓
CONTROLLER (req → service)
   ↓
SERVICE (logic)
   ↓
MODEL / DB
   ↓
SERVICE RETURNS DATA
   ↓
CONTROLLER SENDS RESPONSE
   ↓
CLIENT GETS JSON

**LOGGING TO CONSOLE**

![[Pasted image 20251117212448.png]]


**QUERY FILTERING**

![[Pasted image 20251117211939.png]]

**PAGINATION**

![[Pasted image 20251117212349.png]]

**SORTING**

![[Pasted image 20251117212727.png]]
