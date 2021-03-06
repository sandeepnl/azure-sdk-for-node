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
 * Information about a Service Fabric service.
 *
 */
class ServiceInfo {
  /**
   * Create a ServiceInfo.
   * @member {string} [id]
   * @member {string} [name]
   * @member {string} [typeName]
   * @member {string} [manifestVersion] The version of the service manifest.
   * @member {string} [healthState] Possible values include: 'Invalid', 'Ok',
   * 'Warning', 'Error', 'Unknown'
   * @member {string} [serviceStatus] Possible values include: 'Unknown',
   * 'Active', 'Upgrading', 'Deleting', 'Creating', 'Failed'
   * @member {boolean} [isServiceGroup] Whether the service is in a service
   * group.
   * @member {string} serviceKind Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceInfo
   *
   * @returns {object} metadata of ServiceInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceInfo',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'ServiceKind',
          clientName: 'serviceKind'
        },
        uberParent: 'ServiceInfo',
        className: 'ServiceInfo',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'Id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          typeName: {
            required: false,
            serializedName: 'TypeName',
            type: {
              name: 'String'
            }
          },
          manifestVersion: {
            required: false,
            serializedName: 'ManifestVersion',
            type: {
              name: 'String'
            }
          },
          healthState: {
            required: false,
            serializedName: 'HealthState',
            type: {
              name: 'String'
            }
          },
          serviceStatus: {
            required: false,
            serializedName: 'ServiceStatus',
            type: {
              name: 'String'
            }
          },
          isServiceGroup: {
            required: false,
            serializedName: 'IsServiceGroup',
            type: {
              name: 'Boolean'
            }
          },
          serviceKind: {
            required: true,
            serializedName: 'ServiceKind',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceInfo;
