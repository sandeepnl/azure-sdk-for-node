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
 * Import database parameters.
 *
 */
class ImportExtensionRequest {
  /**
   * Create a ImportExtensionRequest.
   * @member {string} [name] The name of the extension.
   * @member {string} [type] The type of the extension.
   * @member {string} storageKeyType The type of the storage key to use.
   * Possible values include: 'StorageAccessKey', 'SharedAccessKey'
   * @member {string} storageKey The storage key to use.  If storage key type
   * is SharedAccessKey, it must be preceded with a "?."
   * @member {string} storageUri The storage uri to use.
   * @member {string} administratorLogin The name of the SQL administrator.
   * @member {string} administratorLoginPassword The password of the SQL
   * administrator.
   * @member {string} [authenticationType] The authentication type. Possible
   * values include: 'SQL', 'ADPassword'. Default value: 'SQL' .
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImportExtensionRequest
   *
   * @returns {object} metadata of ImportExtensionRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImportExtensionRequest',
      type: {
        name: 'Composite',
        className: 'ImportExtensionRequest',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          storageKeyType: {
            required: true,
            serializedName: 'properties.storageKeyType',
            type: {
              name: 'Enum',
              allowedValues: [ 'StorageAccessKey', 'SharedAccessKey' ]
            }
          },
          storageKey: {
            required: true,
            serializedName: 'properties.storageKey',
            type: {
              name: 'String'
            }
          },
          storageUri: {
            required: true,
            serializedName: 'properties.storageUri',
            type: {
              name: 'String'
            }
          },
          administratorLogin: {
            required: true,
            serializedName: 'properties.administratorLogin',
            type: {
              name: 'String'
            }
          },
          administratorLoginPassword: {
            required: true,
            serializedName: 'properties.administratorLoginPassword',
            type: {
              name: 'String'
            }
          },
          authenticationType: {
            required: false,
            serializedName: 'properties.authenticationType',
            defaultValue: 'SQL',
            type: {
              name: 'Enum',
              allowedValues: [ 'SQL', 'ADPassword' ]
            }
          },
          operationMode: {
            required: true,
            isConstant: true,
            serializedName: 'properties.operationMode',
            defaultValue: 'Import',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ImportExtensionRequest;
