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

const models = require('./index');

/**
 * API details.
 *
 * @extends models['Resource']
 */
class ApiContract extends models['Resource'] {
  /**
   * Create a ApiContract.
   * @member {string} [description] Description of the API. May include HTML
   * formatting tags.
   * @member {object} [authenticationSettings] Collection of authentication
   * settings included into this API.
   * @member {object} [authenticationSettings.oAuth2] OAuth2 Authentication
   * settings
   * @member {string} [authenticationSettings.oAuth2.authorizationServerId]
   * OAuth authorization server identifier.
   * @member {string} [authenticationSettings.oAuth2.scope] operations scope.
   * @member {object} [subscriptionKeyParameterNames] Protocols over which API
   * is made available.
   * @member {string} [subscriptionKeyParameterNames.header] Subscription key
   * header name.
   * @member {string} [subscriptionKeyParameterNames.query] Subscription key
   * query string parameter name.
   * @member {string} [apiType] Type of API. Possible values include: 'http',
   * 'soap'
   * @member {string} [apiRevision] Describes the Revision of the Api. If no
   * value is provided, default revision 1 is created
   * @member {boolean} [isCurrent] Indicates if API revision is current api
   * revision.
   * @member {boolean} [isOnline] Indicates if API revision is accessible via
   * the gateway.
   * @member {string} [displayName] API name.
   * @member {string} [serviceUrl] Absolute URL of the backend service
   * implementing this API.
   * @member {string} path Relative URL uniquely identifying this API and all
   * of its resource paths within the API Management service instance. It is
   * appended to the API endpoint base URL specified during the service
   * instance creation to form a public URL for this API.
   * @member {array} [protocols] Describes on which protocols the operations in
   * this API can be invoked.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApiContract
   *
   * @returns {object} metadata of ApiContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiContract',
      type: {
        name: 'Composite',
        className: 'ApiContract',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          authenticationSettings: {
            required: false,
            serializedName: 'properties.authenticationSettings',
            type: {
              name: 'Composite',
              className: 'AuthenticationSettingsContract'
            }
          },
          subscriptionKeyParameterNames: {
            required: false,
            serializedName: 'properties.subscriptionKeyParameterNames',
            type: {
              name: 'Composite',
              className: 'SubscriptionKeyParameterNamesContract'
            }
          },
          apiType: {
            required: false,
            serializedName: 'properties.type',
            type: {
              name: 'String'
            }
          },
          apiRevision: {
            required: false,
            serializedName: 'properties.apiRevision',
            constraints: {
              MaxLength: 100,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          isCurrent: {
            required: false,
            serializedName: 'properties.isCurrent',
            type: {
              name: 'Boolean'
            }
          },
          isOnline: {
            required: false,
            serializedName: 'properties.isOnline',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            constraints: {
              MaxLength: 300,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          serviceUrl: {
            required: false,
            serializedName: 'properties.serviceUrl',
            constraints: {
              MaxLength: 2000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          path: {
            required: true,
            serializedName: 'properties.path',
            constraints: {
              MaxLength: 400,
              MinLength: 0
            },
            type: {
              name: 'String'
            }
          },
          protocols: {
            required: false,
            serializedName: 'properties.protocols',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProtocolElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'http', 'https' ]
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApiContract;
