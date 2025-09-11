// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TechbooksStainless from 'techbooks-stainless';

const client = new TechbooksStainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource books', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.books.create({
      author: {},
      category: 'Programming',
      description: 'A Handbook of Agile Software Craftsmanship',
      price: 2999,
      title: 'Clean Code',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.books.create({
      author: {
        id: 1,
        biography:
          'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
        name: 'Robert C. Martin',
        photo: 'https://example.com/photos/robert.jpg',
      },
      category: 'Programming',
      description: 'A Handbook of Agile Software Craftsmanship',
      price: 2999,
      title: 'Clean Code',
      id: 1,
      cover_image: 'https://example.com/covers/cleancode.jpg',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.books.retrieve(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.books.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateCover', async () => {
    const responsePromise = client.books.updateCover(1, {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
