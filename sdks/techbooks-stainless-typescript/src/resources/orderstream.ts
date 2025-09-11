// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OrdersAPI from './orders';
import { APIPromise } from '../core/api-promise';
import { Stream } from '../core/streaming';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Orderstream extends APIResource {
  /**
   * Returns a stream of orders
   */
  retrieve(options?: RequestOptions): APIPromise<Stream<OrderstreamRetrieveResponse>> {
    return this._client.get('/orderstream', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<OrderstreamRetrieveResponse>>;
  }
}

/**
 * A message in the order stream
 */
export interface OrderstreamRetrieveResponse {
  id: string;

  data: OrdersAPI.Order;

  event: string;
}

export declare namespace Orderstream {
  export { type OrderstreamRetrieveResponse as OrderstreamRetrieveResponse };
}
