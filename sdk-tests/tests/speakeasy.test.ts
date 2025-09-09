import { SDK } from "../../sdks/techbooks-speakeasy/src/index.js";
import { describe, it, expect } from "bun:test";
import * as operations from "../../sdks/techbooks-speakeasy/src/models/operations/index.js";

const bookStore = new SDK({
  security: {
    apiKey: "test-api-key"
  }
});

describe("Speakeasy TechBooks SDK", () => {
  it("should add a book successfully", async () => {
    const bookData: operations.AddBookRequest = {
      author: {
        name: "Robert C. Martin",
        photo: "https://example.com/photos/robert.jpg",
        biography:
          'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
      },
      category: "Programming",
      description: "A Handbook of Agile Software Craftsmanship",
      price: 2999,
      title: "Clean Code",
    };

    const result = await bookStore.books.addBook(bookData);
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("category");
    expect(result.category).toBe("Programming");
  });

  it("should throw for a book with an invalid price", async () => {
    expect(async () => {
      const bookData: any = {
        author: {
          name: "Robert C. Martin",
          photo: "https://example.com/photos/robert.jpg",
          biography:
            'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
        },
        category: "Programming",
        description: "A Handbook of Agile Software Craftsmanship",
        price: 29.99, // Invalid - should be integer (cents)
        title: "Clean Code",
      };

      await bookStore.books.addBook(bookData);
    }).toThrow();
  });

  it("should throw for a book with an invalid author", async () => {
    expect(async () => {
      const bookData: any = {
        author: {}, // Invalid - missing required fields
        category: "Programming",
        description: "A Handbook of Agile Software Craftsmanship",
        price: 2999,
        title: "Clean Code",
      };

      await bookStore.books.addBook(bookData);
    }).toThrow();
  });
});
