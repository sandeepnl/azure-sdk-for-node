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
 * @class
 * Initializes a new instance of the ResourceMetricValue class.
 * @constructor
 * Value of resource metric
 *
 * @member {string} [timeStamp] Value timestamp
 * 
 * @member {number} [average] Value average
 * 
 * @member {number} [minimum] Value minimum
 * 
 * @member {number} [maximum] Value maximum
 * 
 * @member {number} [total] Value total
 * 
 * @member {number} [count] Value count
 * 
 */
function ResourceMetricValue() {
}

/**
 * Defines the metadata of ResourceMetricValue
 *
 * @returns {object} metadata of ResourceMetricValue
 *
 */
ResourceMetricValue.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResourceMetricValue',
    type: {
      name: 'Composite',
      className: 'ResourceMetricValue',
      modelProperties: {
        timeStamp: {
          required: false,
          serializedName: 'timeStamp',
          type: {
            name: 'String'
          }
        },
        average: {
          required: false,
          serializedName: 'average',
          type: {
            name: 'Number'
          }
        },
        minimum: {
          required: false,
          serializedName: 'minimum',
          type: {
            name: 'Number'
          }
        },
        maximum: {
          required: false,
          serializedName: 'maximum',
          type: {
            name: 'Number'
          }
        },
        total: {
          required: false,
          serializedName: 'total',
          type: {
            name: 'Number'
          }
        },
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = ResourceMetricValue;