
## Development vs Production Environments

You must **never use the same database for both dev and production**.

### Correct Setup:

`MONGO_URI_DEV = mongodb+srv://...
`MONGO_URI_PROD = mongodb+srv://...`

### You CAN use **1 cluster with 2 databases**:

Example inside Atlas:

- `dev_db`
    
- `prod_db`
    

Both live inside the **same cluster**, but are **logically isolated**.

**ARCHITECTURE**

Client
  ↓
Router
  ↓
Auth Middleware (JWT)
  ↓
Validation
  ↓
Controller
  ↓
Mongoose Model
  ↓
MongoDB Atlas
