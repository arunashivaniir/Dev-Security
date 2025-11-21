
Refactoring the giant file into:

`routes/`
`middleware/` 
`utils/`

- `module.exports = ...` lets a file share code
    
- `require()` pulls the code into another file

`exports.createUserValidator = [ ... ];`
You’re allowing other files to import and use it.

### **Global middleware**

Mounted at the `app` level:

`app.use(express.json());`

It runs on **every request**, no exceptions.  
Why? Because it's useful everywhere:

- json parsing
    
- logging
    
- cors
    
- authentication (sometimes)
    
### **Local middleware**

Mounted only on specific routes:

`router.get("/admin", isAdmin, handler);`

It runs **ONLY** for that route.

Because sometimes you need logic only for one endpoint:

- check if user is admin
    
- validate body for that specific route
    
- upload middleware 


**OUTCOMES**

- ###### Broke monolithic API into modular structure

- ######  Added real-world security middleware stack

- ###### Built custom sanitizer using sanitize-html

- ###### Organized validators into utils

- ###### Implemented clean routing

- ###### Eliminated all XSS injection attempts

- ###### Successfully debugged route + middleware order issues

- ###### Achieved professional backend architecture