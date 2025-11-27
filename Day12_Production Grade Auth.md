
## Development vs Production Environments

You must **never use the same database for both dev and production**.

### Correct Setup:

`MONGO_URI_DEV = mongodb+srv://...
`MONGO_URI_PROD = mongodb+srv://...`
