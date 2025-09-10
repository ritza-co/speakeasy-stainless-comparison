// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BooksAPI from './books';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Creates a new order
   *
   * @example
   * ```ts
   * const order = await client.orders.create({
   *   products: [1, 3],
   *   user: 1,
   * });
   * ```
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<Order> {
    return this._client.post('/orders', { body, ...options });
  }

  /**
   * Returns a single order
   *
   * @example
   * ```ts
   * const order = await client.orders.retrieve(1);
   * ```
   */
  retrieve(orderID: number, options?: RequestOptions): APIPromise<Order> {
    return this._client.get(path`/orders/${orderID}`, options);
  }

  /**
   * Returns a list of orders
   *
   * @example
   * ```ts
   * const orders = await client.orders.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<OrderListResponse> {
    return this._client.get('/orders', options);
  }
}

export interface Order {
  id: number;

  date: string;

  products: Array<BooksAPI.FantasyBook | BooksAPI.ProgrammingBook | BooksAPI.ScifiBook>;

  status: 'pending' | 'shipped' | 'delivered';

  user: Order.User;
}

export namespace Order {
  export interface User {
    id?: number;

    email?: string;

    name?: string;
  }
}

export type OrderListResponse = Array<Order>;

export interface OrderCreateParams {
  products: Array<number>;

  user: number;
}

export declare namespace Orders {
  export {
    type Order as Order,
    type OrderListResponse as OrderListResponse,
    type OrderCreateParams as OrderCreateParams,
  };
}
