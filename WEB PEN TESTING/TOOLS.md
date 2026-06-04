
**Basic Tools:**
curl      → Send HTTP requests
wget      → Download websites/files
httpie    → Cleaner curl
nmap      → Scan ports/services
openssl   → SSL/TLS and encoding
dig       → DNS lookups
netcat    → Raw network connections
jq        → Parse JSON
python    → Quick scripting
bash      → Automation

| Tool       | Command                                     | Use                    |
| ---------- | ------------------------------------------- | ---------------------- |
| **curl**   | `curl -I URL`                               | Check headers          |
|            | `curl -X POST -d "data" URL`                | Test forms/APIs        |
|            | `curl -H "Authorization: Bearer TOKEN" URL` | Test JWT/API auth      |
| **nmap**   | `nmap -sC -sV target.com`                   | Quick recon            |
| **dig**    | `dig target.com TXT`                        | Check DNS/TXT records  |
| **nc**     | `nc -lvnp 4444`                             | Listen for connections |
| **jq**     | `curl URL \| jq .`                          | Read JSON APIs         |
| **Python** | `python3 -m http.server 8888`               | Host files             |
