
#### Web Application Architecture

```
Client → Server → Database
```

Request flow:
```
Browser->DNS->TCP->TLS->HTTP Request->Server->HTTP Response
```

#### Three-Tier Architecture

```
Presentation Layer(Browser)
↓
Application Layer(Business Logic)
↓
Data Layer(Database)
```

**SECURITY:**

`HTML`
`→ forms`
`→ hidden fields`
`→ iframes`

`JavaScript`
`→ APIs`
`→ JWTs`
`→ XSS`

`Backend`
`→ Auth`
`→ Access Control`
`→ Business Logic`

`Database`
`→ SQLi`
`→ NoSQLi`

`Web Server`
`→ Apache`
`→ Nginx`

`Reverse Proxy`
`→ X-Forwarded-For`
`→ Request Smuggling`


**HTTP Methods**

| Method  | Pentest Thought           |
| ------- | ------------------------- |
| GET     | Parameters in URL         |
| POST    | Login forms, CSRF         |
| PUT     | Upload/modify data        |
| DELETE  | Dangerous if unauthorized |
| PATCH   | Partial updates           |
| OPTIONS | Discover methods          |
| TRACE   | Rare, but interesting     |
**STATUS CODES:**
200 = Success  
301/302 = Redirect  
401 = Authentication required  
403 = Forbidden  
404 = Not found  
429 = Rate limited  
500 = Server error

**COOKIES:**
Secure → HTTP sniffing  
HttpOnly → JS cookie theft  
SameSite → CSRF

**Authentication Headers**
Bearer--> JWT

