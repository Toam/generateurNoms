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
    'body should have a name': function(res, b){
      assert.ok(res.body.name)
    },
    'body should have a valid name': function(res, b){
      assert.equal(typeof(res.body.name), 'string')
    },
    'body should have a gender': function(res, b){
      assert.ok(res.body.gender)
    },
    'funny param should be false': function(res, b){
      assert.equal(res.body.funny, false)
    },
  },
})
 
.addBatch({
  'Test /name gender M': {
    topic: function(){
      apiTest.get('name?gender=M', {}, this.callback)
    },
    'should be 200': assertStatus(200),
    'should have JSON header': assertJSONHead(),
    'body is valid JSON': assertValidJSON(),
    'body should have a name': function(res, b){
      assert.ok(res.body.name)
    },
    'body should have a valid name': function(res, b){
      assert.equal(typeof(res.body.name), 'string')
    },
    'body should have a gender': function(res, b){
      assert.ok(res.body.gender)
    },    
    'gender should be M': function(res, b){
      assert.equal(res.body.gender, 'M')
    },
    'funny param should be false': function(res, b){
      assert.equal(res.body.funny, false)
    },
  },
})
 
.addBatch({
  'Test /name gender F': {
    topic: function(){
      apiTest.get('name?gender=F', {}, this.callback)
    },
    'should be 200': assertStatus(200),
    'should have JSON header': assertJSONHead(),
    'body is valid JSON': assertValidJSON(),
    'body should have a name': function(res, b){
      assert.ok(res.body.name)
    },
    'body should have a valid name': function(res, b){
      assert.equal(typeof(res.body.name), 'string')
    },
    'body should have a gender': function(res, b){
      assert.ok(res.body.gender)
    },    
    'gender should be F': function(res, b){
      assert.equal(res.body.gender, 'F')
    },
    'funny param should be false': function(res, b){
      assert.equal(res.body.funny, false)
    },
  },
})
 
.addBatch({
  'Test /name funny': {
    topic: function(){
      apiTest.get('name?funny=true', {}, this.callback)
    },
    'should be 200': assertStatus(200),
    'should have JSON header': assertJSONHead(),
    'body is valid JSON': assertValidJSON(),
    'body should have a name': function(res, b){
      assert.ok(res.body.name)
    },
    'body should have a valid name': function(res, b){
      assert.equal(typeof(res.body.name), 'string')
    },
    'body should have a gender': function(res, b){
      assert.ok(res.body.gender)
    },
    'funny param should be true': function(res, b){
      assert.equal(res.body.funny, true)
    },
  },
})

suite.export(module)