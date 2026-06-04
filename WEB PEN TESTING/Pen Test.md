
# Pentest Workflow

```text
1. Recon
2. Enumeration
3. Exploitation
4. Post-Exploitation
5. Reporting
```

---

# Recon (Find Targets)

```text
What exists?
```
```text
Subdomains
Directories
Technologies
IPs
Ports
```

Tools:

```text
subfinder
amass
nmap
httpx
```

---

# Enumeration (Understand Targets)

```text
How does it work?
```
```text
Login pages
APIs
Admin panels
Parameters
User roles
```

---

# Exploitation

```text
Prove the vulnerability

```text
SQLi
XSS
IDOR
SSRF
Auth Bypass
JWT attacks
```


```text
Verify manually
Check impact
Save evidence
```

---

# Post-Exploitation

```text
What can attacker do now?
```
```text
Read user data
Access admin panel
Escalate privileges
Access internal systems
```

---

# Reporting

```text
Title
Description
Impact
Steps
Evidence
Fix
```
---

# Testing Types

### Black Box

```text
No information
Acts like external attacker
```
---
### White Box

```text
Source code available
```

---
### Gray Box

```text
Some credentials/info available
```

---

# Most Important Mistakes

```text
1. Poor documentation
2. Ignoring business logic
3. Not testing different user roles
4. Trusting scanner results blindly
5. Skipping authenticated testing
6. Forgetting API endpoints
```

---

```text
Recon
↓
Map functionality
↓
Find inputs
↓
Test authentication
↓
Test authorization
↓
Test business logic
↓
Document findings
```
