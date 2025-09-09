<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.books.getAllBooks({
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->