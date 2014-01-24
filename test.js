var request = require('request'),
    vows = require('vows'),
    assert = require('assert'),
    apiUrl = "http://localhost:3000/";
 
var apiTest = {
  general: function(method, url, data, cb){
    request(
      {
        method: method,
        url: apiUrl+(url||''),
        json: data || {},
      },
      function(req, res){
        cb(res)
      }
    )
  },
  get: function(url, data, cb){apiTest.general('GET', url, data, cb)},
  post: function(url, data, cb){apiTest.general('POST', url, data, cb)},
  put: function(url, data, cb){apiTest.general('PUT', url, data, cb)},
  del: function(url, data, cb){apiTest.general('DELETE', url, data, cb)}
}
 
function assertStatus(code) {
  return function (res, b, c) {
    assert.equal(res.statusCode, code);
  };
}
 
 
function assertJSONHead(){
  return function(res, b, c){
    assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  }
}
 
function assertValidJSON(){
  return function(res, b){
    assert.ok(typeof(res.body) == 'object')
  }
}

function assertHasAName(){
  return function(res, b){
    assert.ok(res.body.name)
  }
}

function assertValidName(){
  return function(res, b){
    assert.ok(typeof(res.body.name) == 'string')
  }
}
 

var suite = vows.describe('Name generator Tests')

.addBatch({
  "Server should be UP": {
    topic: function(){
      apiTest.get('', {} ,this.callback )
    },
 
    '/ should repond something': function(res, b){
      assert.ok(res.body)
    }
  }
})
 
.addBatch({
  'Test /name': {
    topic: function(){
      apiTest.get('name', {}, this.callback)
    },
    'should be 200': assertStatus(200),
    'should have JSON header': assertJSONHead(),
    'body is valid JSON': assertValidJSON(),
    'body should have a name': assertHasAName(),
    'should return a name': assertValidName(),
  },
})

suite.export(module)