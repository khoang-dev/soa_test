/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */

import type { dtos_MultiLangPageResponse } from '../models/dtos_MultiLangPageResponse'
import type { dtos_PageResponse } from '../models/dtos_PageResponse'
import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'
export class PagesService {
  /**
   * Get all pages
   * Get all pages for a specific language
   * @param lang Language code (en/fr)
   * @returns dtos_PageResponse OK
   * @throws ApiError
   */
  public static getPages(lang: string = 'fr'): CancelablePromise<Array<dtos_PageResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pages',
      query: {
        lang: lang,
      },
      errors: {
        500: `Internal Server Error`,
      },
    })
  }
  /**
   * Get all lists
   * Get all pages with their translations
   * @returns dtos_MultiLangPageResponse OK
   * @throws ApiError
   */
  public static getPagesLists(): CancelablePromise<Array<dtos_MultiLangPageResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pages/lists',
      errors: {
        500: `Internal Server Error`,
      },
    })
  }
  /**
   * Get a page by ID
   * Get a specific page by its ID
   * @param id Page ID
   * @returns dtos_PageResponse OK
   * @throws ApiError
   */
  public static getPages1(id: string): CancelablePromise<dtos_PageResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pages/{id}',
      path: {
        id: id,
      },
      errors: {
        404: `Not Found`,
        500: `Internal Server Error`,
      },
    })
  }
}
