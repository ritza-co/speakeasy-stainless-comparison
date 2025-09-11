# Order

## Example Usage

```typescript
import { Order } from "openapi/models";

let value: Order = {
  id: 1,
  date: new Date("2023-05-17T09:24:00Z"),
  status: "pending",
  user: {
    id: 1,
    email: "user@example.com",
    name: "John Doe",
  },
  products: [
    {
      id: 1,
      title: "Clean Code",
      description: "A Handbook of Agile Software Craftsmanship",
      price: 2999,
      category: "Programming",
      author: {
        id: 1,
        name: "Robert C. Martin",
        photo: "https://example.com/photos/robert.jpg",
        biography:
          "Robert Cecil Martin, colloquially known as \"Uncle Bob\", is an American software engineer...",
      },
    },
    {
      id: 2,
      title: "The Hobbit",
      description: "A fantasy novel by J.R.R. Tolkien",
      price: 1599,
      category: "Fantasy",
      author: {
        id: 2,
        name: "J.R.R. Tolkien",
        photo: "https://example.com/photos/tolkien.jpg",
        biography:
          "John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic...",
      },
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 1                                                                                             |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2023-05-17 09:24:00 +0000 UTC                                                                 |
| `status`                                                                                      | [models.Status](../models/status.md)                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | pending                                                                                       |
| `user`                                                                                        | [models.User](../models/user.md)                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           | {<br/>"id": 1,<br/>"email": "user@example.com",<br/>"name": "John Doe"<br/>}                  |
| `products`                                                                                    | *models.Product*[]                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |