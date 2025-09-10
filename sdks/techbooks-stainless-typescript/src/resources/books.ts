// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Books extends APIResource {
  /**
   * Adds a new book to the bookstore
   *
   * @example
   * ```ts
   * const book = await client.books.create({
   *   author: {
   *     name: 'New Author',
   *     photo: 'https://example.com/photos/newauthor.jpg',
   *     biography:
   *       'New Author is an upcoming writer in the Sci-Fi genre...',
   *   },
   *   category: 'Sci-fi',
   *   description: 'A new Sci-Fi book description',
   *   price: 1999,
   *   title: 'New Sci-Fi Book',
   *   cover_image: 'https://example.com/covers/newbook.jpg',
   * });
   * ```
   */
  create(body: BookCreateParams, options?: RequestOptions): APIPromise<BookCreateResponse> {
    return this._client.post('/books', { body, ...options });
  }

  /**
   * Returns a single book
   *
   * @example
   * ```ts
   * const book = await client.books.retrieve(1);
   * ```
   */
  retrieve(bookID: number, options?: RequestOptions): APIPromise<BookRetrieveResponse> {
    return this._client.get(path`/books/${bookID}`, options);
  }

  /**
   * Returns a list of books
   *
   * @example
   * ```ts
   * const books = await client.books.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BookListResponse> {
    return this._client.get('/books', options);
  }

  /**
   * Updates a single book cover
   *
   * @example
   * ```ts
   * await client.books.updateCover(1);
   * ```
   */
  updateCover(bookID: number, body: BookUpdateCoverParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(
      path`/books/${bookID}/cover`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface Book {
  author: Book.Author;

  category: 'Sci-fi' | 'Fantasy' | 'Programming';

  description: string;

  /**
   * Price in USD cents
   */
  price: number;

  title: string;

  id?: number;

  cover_image?: string;
}

export namespace Book {
  export interface Author {
    id?: number;

    biography?: string;

    name?: string;

    photo?: string;
  }
}

export interface FantasyBook extends Omit<Book, 'category'> {
  category?: 'Fantasy';
}

export interface ProgrammingBook extends Omit<Book, 'category'> {
  category?: 'Programming';
}

export interface ScifiBook extends Omit<Book, 'category'> {
  category?: 'Sci-fi';
}

export type BookCreateResponse = ProgrammingBook | FantasyBook | ScifiBook;

export type BookRetrieveResponse = ProgrammingBook | FantasyBook | ScifiBook;

export type BookListResponse = Array<ProgrammingBook | FantasyBook | ScifiBook>;

export type BookCreateParams =
  | BookCreateParams.ProgrammingBook
  | BookCreateParams.FantasyBook
  | BookCreateParams.ScifiBook;

export declare namespace BookCreateParams {
  export interface ProgrammingBook {
    author: ProgrammingBook.Author;

    category: 'Programming' | 'Sci-fi' | 'Fantasy';

    description: string;

    /**
     * Price in USD cents
     */
    price: number;

    title: string;

    id?: number;

    cover_image?: string;
  }

  export namespace ProgrammingBook {
    export interface Author {
      id?: number;

      biography?: string;

      name?: string;

      photo?: string;
    }
  }

  export interface FantasyBook {
    author: FantasyBook.Author;

    category: 'Fantasy' | 'Sci-fi' | 'Programming';

    description: string;

    /**
     * Price in USD cents
     */
    price: number;

    title: string;

    id?: number;

    cover_image?: string;
  }

  export namespace FantasyBook {
    export interface Author {
      id?: number;

      biography?: string;

      name?: string;

      photo?: string;
    }
  }

  export interface ScifiBook {
    author: ScifiBook.Author;

    category: 'Sci-fi' | 'Fantasy' | 'Programming';

    description: string;

    /**
     * Price in USD cents
     */
    price: number;

    title: string;

    id?: number;

    cover_image?: string;
  }

  export namespace ScifiBook {
    export interface Author {
      id?: number;

      biography?: string;

      name?: string;

      photo?: string;
    }
  }
}

export interface BookUpdateCoverParams {
  cover?: Uploadable;
}

export declare namespace Books {
  export {
    type Book as Book,
    type FantasyBook as FantasyBook,
    type ProgrammingBook as ProgrammingBook,
    type ScifiBook as ScifiBook,
    type BookCreateResponse as BookCreateResponse,
    type BookRetrieveResponse as BookRetrieveResponse,
    type BookListResponse as BookListResponse,
    type BookCreateParams as BookCreateParams,
    type BookUpdateCoverParams as BookUpdateCoverParams,
  };
}
