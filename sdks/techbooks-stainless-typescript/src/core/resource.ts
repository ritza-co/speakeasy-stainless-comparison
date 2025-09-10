// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TechbooksStainless } from '../client';

export abstract class APIResource {
  protected _client: TechbooksStainless;

  constructor(client: TechbooksStainless) {
    this._client = client;
  }
}
