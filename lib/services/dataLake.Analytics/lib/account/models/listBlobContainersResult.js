/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ListBlobContainersResult class.
 * @constructor
 * The list of blob containers associated with the storage account attached to
 * the Data Lake Analytics account.
 * @member {array} [value] Gets or set the results of the list operation
 * 
 * @member {string} [nextLink] Gets or sets the link (url) to the next page of
 * results.
 * 
 */
function ListBlobContainersResult() {
}

util.inherits(ListBlobContainersResult, Array);

/**
 * Defines the metadata of ListBlobContainersResult
 *
 * @returns {object} metadata of ListBlobContainersResult
 *
 */
ListBlobContainersResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ListBlobContainersResult',
    type: {
      name: 'Composite',
      className: 'ListBlobContainersResult',
      modelProperties: {
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'BlobContainerElementType',
                type: {
                  name: 'Composite',
                  className: 'BlobContainer'
                }
            }
          }
        },
        nextLink: {
          required: false,
          readOnly: true,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ListBlobContainersResult;