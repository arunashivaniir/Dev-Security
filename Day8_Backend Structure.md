
Refactoring the giant file into:

`routes/`
`middleware/` 
`utils/`

- `module.exports = ...` lets a file share code
    
- `require()` pulls the code into another file

`exports.createUserValidator = [ ... ];`
You’re allowing other files to import and use it.

**OUTCOMES**

- ###### Broke monolithic API into modular structure

- ######  Added real-world security middleware stack

- ###### Built custom sanitizer using sanitize-html

- ###### Organized validators into utils

- ###### Implemented clean routing

- ###### Eliminated all XSS injection attempts

- ###### Successfully debugged route + middleware order issues

- ###### Achieved professional backend architecture