
##### What is Express?

- Web framework of node
- Used to build server-side applications.
- Simplifies http response handling

###### Unopinionated Framework:

- Diff ways to do same thing.
- Structures folders how you want.

FLOW:
Route → Controller → Service → Model → Service → Controller → Client


#####  What is a route?

- Only handles URLs and  method.
- Match URL + HTTP method
- Pass work to controller

> const express = require("express");
> const router = express.Router();
> const userController = require("../controllers/user.controller");
> 
> router.post("/register", userController.register);
> router.get("/profile/:id", userController.getProfile);
> 
> module.exports = router;

##### - What does express.json() do?

It **parses JSON bodies** from incoming requests and turns them into `req.body`.
Without it, `req.body` is always **undefined** for JSON requests.


##### - Why is input validation important?

If we don’t validate input, we’re basically inviting people to **break our app, steal data, inject malware, corrupt our database, or crash our server.**

##### - What is the difference between GET and POST?

GET puts data in the URL. POST puts data in the body.
GET is for reading. POST is for creating or sending data.
GET requests can be cached. POST cannot
GET has size limits. POST can send large payloads.
### GET /products

Same result every time.

### POST /order

Submitting twice = creates _two_ orders.

USING INPUT VALIDATION:

![[Pasted image 20251117191452.png]]


