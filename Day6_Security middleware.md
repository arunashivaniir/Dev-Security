
GOAL: Add REAL security protections to your API using **Helmet**, **Rate Limiting**, **CORS**, and **XSS protection**.

**MIDDLEWARE**
 - A middleware is a function that runs before the route.
 - Runs in order, top → bottom.
 - Can modify req, res, or block the request.
 - Used for logging, validation, rate limiting, sanitizing, security headers.


![[Screenshot 2025-11-18 164119.png]]


## Security Layers Added

### **Helmet**

- Sets security headers (XSS, clickjacking, CSP, etc.)
    
### **Rate Limiting**

- Limits brute-force
    
- Limits API abuse
    
- Prevents DoS from basic clients
    
### **CORS**

- Controls which frontends can access API
    
### **Validation**

- Blocks malicious input
    
- Prevents SQL injection behavior
    
- Rejects malformed data
### **Sanitization**

- Removes harmful HTML
    
- Prevents script injection


**SUMMARY**

- **Helmet → Hardens the API**
    
- **RateLimiter → Prevents spam/abuse**
    
- **CORS → Controls who can call your server**
    
- **Sanitizer → Cleans the user input**
    
- **Logger → Records what happened**
    
- **Validator → Ensures correct/safe data**
    
- **Route → Performs business logic**
    
- **Response → Sends final output**

# **API Design Discipline**

✔ All routes must validate input. 
✔ All errors must return safe messages (never expose backend logic).
✔ Query parameters must be sanitized before filtering or searching.
✔ Pagination prevents data flooding. 
✔ Sorting requires controlled fields (avoid dynamic keys).
✔ 404 handler should be last. 
✔ Error handler must be last.