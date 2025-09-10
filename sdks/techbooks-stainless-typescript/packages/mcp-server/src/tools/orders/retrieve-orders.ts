// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'techbooks-stainless-mcp/filtering';
import { Metadata, asTextContentResult } from 'techbooks-stainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TechbooksStainless from 'techbooks-stainless';

export const metadata: Metadata = {
  resource: 'orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/orders/{orderId}',
  operationId: 'getOrderById',
};

export const tool: Tool = {
  name: 'retrieve_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a single order\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order',\n  $defs: {\n    order: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        products: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                $ref: '#/$defs/fantasy_book'\n              },\n              {\n                $ref: '#/$defs/programming_book'\n              },\n              {\n                $ref: '#/$defs/scifi_book'\n              }\n            ]\n          }\n        },\n        status: {\n          type: 'string',\n          enum: [            'pending',\n            'shipped',\n            'delivered'\n          ]\n        },\n        user: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'integer'\n            },\n            email: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'date',\n        'products',\n        'status',\n        'user'\n      ]\n    },\n    fantasy_book: {\n      allOf: [        {\n          $ref: '#/$defs/book'\n        }\n      ]\n    },\n    book: {\n      type: 'object',\n      properties: {\n        author: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'integer'\n            },\n            biography: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            photo: {\n              type: 'string'\n            }\n          }\n        },\n        category: {\n          type: 'string',\n          enum: [            'Sci-fi',\n            'Fantasy',\n            'Programming'\n          ]\n        },\n        description: {\n          type: 'string'\n        },\n        price: {\n          type: 'integer',\n          description: 'Price in USD cents'\n        },\n        title: {\n          type: 'string'\n        },\n        id: {\n          type: 'integer'\n        },\n        cover_image: {\n          type: 'string'\n        }\n      },\n      required: [        'author',\n        'category',\n        'description',\n        'price',\n        'title'\n      ]\n    },\n    programming_book: {\n      allOf: [        {\n          $ref: '#/$defs/book'\n        }\n      ]\n    },\n    scifi_book: {\n      allOf: [        {\n          $ref: '#/$defs/book'\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['orderId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: TechbooksStainless, args: Record<string, unknown> | undefined) => {
  const { orderId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.orders.retrieve(orderId)));
};

export default { metadata, tool, handler };
