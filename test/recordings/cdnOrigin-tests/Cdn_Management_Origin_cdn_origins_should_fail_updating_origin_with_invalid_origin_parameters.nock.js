// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514/origins/newname?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Property 'Origin.HttpsPort' cannot be set to '-9090'. Acceptable values are within range [1, 65535]\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'bf93680b-7458-4afd-bef8-b822450bc22c',
  'x-ms-client-request-id': 'a585f65e-1a27-417c-a4d6-e3796bc17070',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ee18eaba-5d41-42f8-b6c3-c6b9b575fc6d',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222744Z:ee18eaba-5d41-42f8-b6c3-c6b9b575fc6d',
  date: 'Tue, 01 Mar 2016 22:27:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3647/providers/Microsoft.Cdn/profiles/cdnTestProfile2665/endpoints/cdnTestEndpoint6514/origins/newname?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Property 'Origin.HttpsPort' cannot be set to '-9090'. Acceptable values are within range [1, 65535]\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'bf93680b-7458-4afd-bef8-b822450bc22c',
  'x-ms-client-request-id': 'a585f65e-1a27-417c-a4d6-e3796bc17070',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ee18eaba-5d41-42f8-b6c3-c6b9b575fc6d',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T222744Z:ee18eaba-5d41-42f8-b6c3-c6b9b575fc6d',
  date: 'Tue, 01 Mar 2016 22:27:43 GMT',
  connection: 'close' });
 return result; }]];