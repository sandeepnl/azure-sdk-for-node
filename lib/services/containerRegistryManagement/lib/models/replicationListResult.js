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
 * The result of a request to list replications for a container registry.
 */
class ReplicationListResult extends Array {
  /**
   * Create a ReplicationListResult.
   * @member {string} [nextLink] The URI that can be used to request the next
   * list of replications.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ReplicationListResult
   *
   * @returns {object} metadata of ReplicationListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReplicationListResult',
      type: {
        name: 'Composite',
        className: 'ReplicationListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReplicationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Replication'
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

module.exports = ReplicationListResult;