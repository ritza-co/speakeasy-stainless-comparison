// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'techbooks-stainless-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import TechbooksStainless from 'techbooks-stainless';

export const metadata: Metadata = {
  resource: 'books',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/books/{bookId}/cover',
  operationId: 'updateBookCoverById',
};

export const tool: Tool = {
  name: 'update_cover_books',
  description: 'Updates a single book cover',
  inputSchema: {
    type: 'object',
    properties: {
      bookId: {
        type: 'integer',
      },
      cover: {
        type: 'string',
      },
    },
    required: ['bookId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: TechbooksStainless, args: Record<string, unknown> | undefined) => {
  const { bookId, ...body } = args as any;
  const response = await client.books.updateCover(bookId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
