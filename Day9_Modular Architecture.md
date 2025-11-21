
## FOLDER STRUCTURE

`/crud-api`
  `├── index.js             → Main server (entry point)`
  `├── routes/`
  `│      └── users.js      → All /users routes`
  `├── controllers/`
  `│      └── users.controller.js → Logic for each request`
  `├── utils/`
  `│      └── validation.js → Validation rules for routes`
  `├── middleware/`
  `│      ├── logger.js     → Request logging middleware`
  `│      └── sanitize.js   → Body sanitization middleware`


### **Every file has ONE responsibility**

- routes → define _paths_
    
- controllers → define _logic_
    
- validators → define _rules_
    
- middleware → define _filters_
    
- index.js → bootstraps all of it

**index.js** is the _entry point_ — it should only:

- start the server
    
- load middleware
    
- mount routes