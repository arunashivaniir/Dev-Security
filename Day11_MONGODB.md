
## **What a Model Is**

A **Model** is the actual interface to a MongoDB collection.

- Created from a Schema.
    
- Gives you functions like `find()`, `create()`, `findById()`, `updateOne()`, `deleteOne()`

Schema → Model → Collection

## **What a Schema Is**

A **Schema** is the **blueprint** that defines what fields a document should have.

- Field names
    
- Field types
    
- Required/optional
    
- Default values
    
- Validations

Express **Flow:**

`Client → Express Route → Controller → Mongoose Model → MongoDB`


