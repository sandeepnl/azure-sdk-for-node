/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The response model for the list dsc nodes operation.
 */
class DscNodeReportListResult extends Array {
  /**
   * Create a DscNodeReportListResult.
   * @member {string} [nextLink] Gets or sets the next link.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DscNodeReportListResult
   *
   * @returns {object} metadata of DscNodeReportListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DscNodeReportListResult',
      type: {
        name: 'Composite',
        className: 'DscNodeReportListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DscNodeReportElementType',
                  type: {
                    name: 'Composite',
                    className: 'DscNodeReport'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DscNodeReportListResult;