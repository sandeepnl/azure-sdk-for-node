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
 * The list workspace usages operation response.
 */
class WorkspaceListUsagesResult extends Array {
  /**
   * Create a WorkspaceListUsagesResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WorkspaceListUsagesResult
   *
   * @returns {object} metadata of WorkspaceListUsagesResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkspaceListUsagesResult',
      type: {
        name: 'Composite',
        className: 'WorkspaceListUsagesResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UsageMetricElementType',
                  type: {
                    name: 'Composite',
                    className: 'UsageMetric'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = WorkspaceListUsagesResult;