// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup457/providers/Microsoft.Storage/storageAccounts/testacc2604/listKeys?api-version=2017-06-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"lH5AfajYnmHsNTe0I6MLJseoTllas1Og313C87Rl0Gnm55cDdllwx6gnwl32+aW9KG5YQn+1NxJO23xMVTZTIw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"syisIARDZ1GCTA1lDheNNJY9eoz9lTZYWZog+ulHMw/GDvcGpC8rKXpojve+oJbr6G1Nhy4EcdxAfjnJ+c/z8A==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3fcb9ce3-4739-49f8-96a1-f9d63da3a031',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3fcb9ce3-4739-49f8-96a1-f9d63da3a031',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024435Z:3fcb9ce3-4739-49f8-96a1-f9d63da3a031',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:44:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup457/providers/Microsoft.Storage/storageAccounts/testacc2604/listKeys?api-version=2017-06-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"lH5AfajYnmHsNTe0I6MLJseoTllas1Og313C87Rl0Gnm55cDdllwx6gnwl32+aW9KG5YQn+1NxJO23xMVTZTIw==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"syisIARDZ1GCTA1lDheNNJY9eoz9lTZYWZog+ulHMw/GDvcGpC8rKXpojve+oJbr6G1Nhy4EcdxAfjnJ+c/z8A==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3fcb9ce3-4739-49f8-96a1-f9d63da3a031',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3fcb9ce3-4739-49f8-96a1-f9d63da3a031',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024435Z:3fcb9ce3-4739-49f8-96a1-f9d63da3a031',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:44:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup457/providers/Microsoft.Storage/storageAccounts/testacc2604/regenerateKey?api-version=2017-06-01', '*')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"6ynhUImjBuufEFUhwFFviv4OJRmB2EYaHHWUgtkqCRrSkk0kRufZ1Y7LU0b/VxYIIHSHNL2uR4NbZ2Q/mRaZ3Q==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"syisIARDZ1GCTA1lDheNNJY9eoz9lTZYWZog+ulHMw/GDvcGpC8rKXpojve+oJbr6G1Nhy4EcdxAfjnJ+c/z8A==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c7d29737-0e9b-40d6-84bb-bb87120b5b86',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c7d29737-0e9b-40d6-84bb-bb87120b5b86',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170907T024436Z:c7d29737-0e9b-40d6-84bb-bb87120b5b86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:44:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup457/providers/Microsoft.Storage/storageAccounts/testacc2604/regenerateKey?api-version=2017-06-01', '*')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"6ynhUImjBuufEFUhwFFviv4OJRmB2EYaHHWUgtkqCRrSkk0kRufZ1Y7LU0b/VxYIIHSHNL2uR4NbZ2Q/mRaZ3Q==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"syisIARDZ1GCTA1lDheNNJY9eoz9lTZYWZog+ulHMw/GDvcGpC8rKXpojve+oJbr6G1Nhy4EcdxAfjnJ+c/z8A==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c7d29737-0e9b-40d6-84bb-bb87120b5b86',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c7d29737-0e9b-40d6-84bb-bb87120b5b86',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20170907T024436Z:c7d29737-0e9b-40d6-84bb-bb87120b5b86',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:44:36 GMT',
  connection: 'close' });
 return result; }]];