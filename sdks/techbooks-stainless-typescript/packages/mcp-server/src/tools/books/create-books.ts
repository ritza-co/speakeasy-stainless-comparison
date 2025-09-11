// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'techbooks-stainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'techbooks-stainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TechbooksStainless from 'techbooks-stainless';

export const metadata: Metadata = {
  resource: 'books',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/books',
  operationId: 'addBook',
};

export const tool: Tool = {
  name: 'create_books',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdds a new book to the bookstore\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      $ref: '#/$defs/programming_book'\n    },\n    {\n      $ref: '#/$defs/fantasy_book'\n    },\n    {\n      $ref: '#/$defs/scifi_book'\n    }\n  ],\n  $defs: {\n    programming_book: {\n      allOf: [        {\n          $ref: '#/$defs/book'\n        }\n      ]\n    },\n    book: {\n      type: 'object',\n      properties: {\n        author: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'integer'\n            },\n            biography: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            photo: {\n              type: 'string'\n            }\n          }\n        },\n        category: {\n          type: 'string',\n          enum: [            'Sci-fi',\n            'Fantasy',\n            'Programming'\n          ]\n        },\n        description: {\n          type: 'string'\n        },\n        price: {\n          type: 'integer',\n          description: 'Price in USD cents'\n        },\n        title: {\n          type: 'string'\n        },\n        id: {\n          type: 'integer'\n        },\n        cover_image: {\n          type: 'string'\n        }\n      },\n      required: [        'author',\n        'category',\n        'description',\n        'price',\n        'title'\n      ]\n    },\n    fantasy_book: {\n      allOf: [        {\n          $ref: '#/$defs/book'\n        }\n      ]\n    },\n    scifi_book: {\n      allOf: [        {\n          $ref: '#/$defs/book'\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          author: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              biography: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              photo: {
                type: 'string',
              },
            },
          },
          category: {
            type: 'string',
            enum: ['Programming', 'Sci-fi', 'Fantasy'],
          },
          description: {
            type: 'string',
          },
          price: {
            type: 'integer',
            description: 'Price in USD cents',
          },
          title: {
            type: 'string',
          },
          id: {
            type: 'integer',
          },
          cover_image: {
            type: 'string',
          },
        },
        required: ['author', 'category', 'description', 'price', 'title'],
      },
      {
        type: 'object',
        properties: {
          author: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              biography: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              photo: {
                type: 'string',
              },
            },
          },
          category: {
            type: 'string',
            enum: ['Fantasy', 'Sci-fi', 'Programming'],
          },
          description: {
            type: 'string',
          },
          price: {
            type: 'integer',
            description: 'Price in USD cents',
          },
          title: {
            type: 'string',
          },
          id: {
            type: 'integer',
          },
          cover_image: {
            type: 'string',
          },
        },
        required: ['author', 'category', 'description', 'price', 'title'],
      },
      {
        type: 'object',
        properties: {
          author: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
              },
              biography: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              photo: {
                type: 'string',
              },
            },
          },
          category: {
            type: 'string',
            enum: ['Sci-fi', 'Fantasy', 'Programming'],
          },
          description: {
            type: 'string',
          },
          price: {
            type: 'integer',
            description: 'Price in USD cents',
          },
          title: {
            type: 'string',
          },
          id: {
            type: 'integer',
          },
          cover_image: {
            type: 'string',
          },
        },
        required: ['author', 'category', 'description', 'price', 'title'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: TechbooksStainless, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.books.create(body)));
};

export default { metadata, tool, handler };
