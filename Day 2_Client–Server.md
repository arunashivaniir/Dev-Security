Web browsers communicate with web servers using HTTP.
When an HTML page is returned, it is rendered by the web browser.

REQUEST

 - The first part of a request is called the **header**, and contains useful information about the request.
 - An HTML head contains useful information about an HTML document (but not the actual content itself, which is in the body).

 RESPONSE

- The first line includes the response code `200 OK`
- Content-type
- character-set
- content-length
- At the end of the message we see the **body** content — which contains the actual HTML returned by the request.

POST 

An HTTP `POST` is made when you submit a form containing information to be saved on the server.

STATIC SITES

A _static site_ is one that returns the same hard coded content from the server whenever a particular resource is requested.
The server for a static site will only ever need to process GET requests, because the server doesn't store any modifiable data.

![[Pasted image 20251114112806.png]]


DYNAMIC SITES

A _dynamic site_ is one that can generate and return content based on the specific request URL and data.

![[Pasted image 20251114112746.png]]

A _Web Application's_ job is to receive HTTP requests and return HTTP responses. While interacting with a database to get or update information.
