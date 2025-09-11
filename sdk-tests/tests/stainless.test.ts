import { TechbooksStainless } from "../../sdks/techbooks-stainless-typescript/src/index.js";
import { describe, it, expect } from "bun:test";

const bookStore = new TechbooksStainless({
  apiKey: "test-api-key",
});

describe("Stainless TechBooks SDK", () => {
  it("should add a book successfully", async () => {
    const params: TechbooksStainless.BookCreateParams = {
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

    const result: TechbooksStainless.BookCreateResponse = await bookStore.books.create(
      params
    );
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("category");
    expect(result.category).toBe("Programming");
  });

  it("calls the API for a book with an invalid price and receives a validation error", async () => {
    expect(async () => {
      const params: any = {
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

      const result: TechbooksStainless.BookCreateResponse = await bookStore.books.create(
        params
      );

      console.log(result);
    }).toThrow();
  });

  it("calls the API for a book with an invalid author and receives a validation error", async () => {
    expect(async () => {
      const params: any = {
        author: {}, // Invalid - missing required fields
        category: "Programming",
        description: "A Handbook of Agile Software Craftsmanship",
        price: 2999,
        title: "Clean Code",
      };

      const result: TechbooksStainless.BookCreateResponse = await bookStore.books.create(
        params
      );

      console.log(result);
    }).toThrow();
  });
});
