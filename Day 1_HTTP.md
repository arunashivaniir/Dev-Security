***HTTP***

**GET**
Retrieves data from server

**POST**
Submit data to server

**PUT**
Update data already on server

**DELETE**
Deletes data from server

**STATUS CODES**

1xx-->Informational
Request received/processing

2xx-->Successfully received/accepted
200--> OK
201-->OK created

3xx-->Redirect
Action must be taken
301-->moved to new URL
304-->cached version

4xx-->Client error
Request doesn't have what it needs
400-->Bad request
401-->unauthorized
404-->not found

5xx-->Server error
Server failed to fulfill request
500-->internal server error

HTTP/2
faster n efficient
enables multiplexing-->enables  full request n response

***PRACTISE ON POSTMAN ***

**GET REQUEST**

![[Screenshot 2025-11-13 222444.png]]


**POST REQUEST**

![[Screenshot 2025-11-13 222522.png]]

**DELETE REQUEST**
![[Screenshot 2025-11-13 222536.png]] **Client: the user-agent**
The _user-agent_ is any tool that acts on behalf of the user. This role is primarily performed by the Web browser.The browser is **always** the entity initiating the request.

**Proxies**
Those operating at the application layers are generally called **proxies**. These can be transparent, forwarding on the requests they receive without altering them in any way.

**HTTP is stateless**
HTTP is inherently stateless, treating each request independently.  
HTTP cookies provide a mechanism to maintain "state" across requests, enabling persistent user sessions for applications like e-commerce shopping carts.

**Connections**
- HTTP depends on reliable transport like TCP since UDP is unreliable. 
- HTTP/1.0 opened new connections for every request, while HTTP/1.1 added persistent connections.
- HTTP/2 improved efficiency with multiplexing, and newer protocols like QUIC aim to make HTTP faster using UDP with added reliability.

**HTTP flow**

When a client wants to communicate with a server, either the final server or an intermediate proxy, it performs the following steps:

1. Open a TCP connection.
    
2. Send an HTTP message
    
3. Read the response sent by the server
    
4. Close or reuse the connection for further requests.


![Overview of a HTTP GET request with headers](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)
**API**

- The Fetch API lets websites ask for information from servers and get back data, like loading a news article or search results. 
- Server-sent events (SSE) let your browser get live updates from a server, such as news or sports scores, without asking each time.
- The browser uses something called EventSource to keep the connection open and receive new messages as they happen.