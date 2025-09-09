# Books
(*books*)

## Overview

Operations related to books

### Available Operations

* [getAllBooks](#getallbooks) - Get all books
* [addBook](#addbook) - Add a new book
* [getBookById](#getbookbyid) - Get a book by ID
* [updateBookCoverById](#updatebookcoverbyid) - Update a book cover by ID

## getAllBooks

Returns a list of books

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAllBooks" method="get" path="/books" -->
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

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { booksGetAllBooks } from "openapi/funcs/booksGetAllBooks.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await booksGetAllBooks(sdk, {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("booksGetAllBooks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetAllBooksSecurity](../../models/operations/getallbookssecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetAllBooksResponse[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## addBook

Adds a new book to the bookstore

### Example Usage

<!-- UsageSnippet language="typescript" operationID="addBook" method="post" path="/books" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.books.addBook({
    title: "New Sci-Fi Book",
    description: "A new Sci-Fi book description",
    price: 1999,
    category: "Sci-fi",
    author: {
      name: "New Author",
      photo: "https://example.com/photos/newauthor.jpg",
      biography: "New Author is an upcoming writer in the Sci-Fi genre...",
    },
    coverImage: "https://example.com/covers/newbook.jpg",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { booksAddBook } from "openapi/funcs/booksAddBook.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await booksAddBook(sdk, {
    title: "New Sci-Fi Book",
    description: "A new Sci-Fi book description",
    price: 1999,
    category: "Sci-fi",
    author: {
      name: "New Author",
      photo: "https://example.com/photos/newauthor.jpg",
      biography: "New Author is an upcoming writer in the Sci-Fi genre...",
    },
    coverImage: "https://example.com/covers/newbook.jpg",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("booksAddBook failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddBookRequest](../../models/operations/addbookrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AddBookResponse](../../models/operations/addbookresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## getBookById

Returns a single book

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBookById" method="get" path="/books/{bookId}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.books.getBookById({
    bookId: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { booksGetBookById } from "openapi/funcs/booksGetBookById.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore();

async function run() {
  const res = await booksGetBookById(sdk, {
    bookId: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("booksGetBookById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBookByIdRequest](../../models/operations/getbookbyidrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBookByIdResponse](../../models/operations/getbookbyidresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## updateBookCoverById

Updates a single book cover

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateBookCoverById" method="put" path="/books/{bookId}/cover" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  await sdk.books.updateBookCoverById({
    bookId: 1,
    requestBody: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { booksUpdateBookCoverById } from "openapi/funcs/booksUpdateBookCoverById.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await booksUpdateBookCoverById(sdk, {
    bookId: 1,
    requestBody: {},
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("booksUpdateBookCoverById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBookCoverByIdRequest](../../models/operations/updatebookcoverbyidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |