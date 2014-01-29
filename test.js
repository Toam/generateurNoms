var vows = require('vows'),
  assert = require('assert');

var Generateur = require('./generateur.js');

vows.describe('Générateur')
  .addBatch({
    'A name - ': {
      topic: new (Generateur),
      'when is generated': {
        topic: function (generateur) {
          params = {};
          return generateur.getName(params);
        },
        'it should have a name': function (result) {
          assert.ok(result.name);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a param "funny" set to false': function (result) {
          assert.equal(result.funny, false);
        }
      }
    }
  })
  .addBatch({
    'A funny name - ': {
      topic: new (Generateur),
      'when is generated': {
        topic: function (generateur) {
          params = {
            funny: "true"
          };
          return generateur.getName(params);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a param "funny" set to true': function (result) {
          assert.equal(result.funny, true);
        }
      }
    }
  })
  .addBatch({
    'A not funny name - ': {
      topic: new (Generateur),
      'when generated': {
        topic: function (generateur) {
          params = {
            funny: "false"
          };
          return generateur.getName(params);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a param "funny" set to false': function (result) {
          assert.equal(result.funny, false);
        }
      }
    }
  })
  .addBatch({
    'A male name - ': {
      topic: new (Generateur),
      'when generated': {
        topic: function (generateur) {
          params = {
            gender: "M"
          };
          return generateur.getName(params);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a male gender': function (result) {
          assert.equal(result.gender, "M");
        },
        'it should have a param "funny" set to false': function (result) {
          assert.equal(result.funny, false);
        }
      }
    }
  })
  .addBatch({
    'A female name - ': {
      topic: new (Generateur),
      'when generated': {
        topic: function (generateur) {
          params = {
            gender: "F"
          };
          return generateur.getName(params);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a female gender': function (result) {
          assert.equal(result.gender, "F");
        },
        'it should have a param "funny" set to false': function (result) {
          assert.equal(result.funny, false);
        }
      }
    }
  })
  .addBatch({
    'A funny female name - ': {
      topic: new (Generateur),
      'when generated': {
        topic: function (generateur) {
          params = {
            gender: "F",
            funny: "true"
          };
          return generateur.getName(params);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a female gender': function (result) {
          assert.equal(result.gender, "F");
        },
        'it should have a param "funny" set to false': function (result) {
          assert.equal(result.funny, true);
        }
      }
    }
  })
  .addBatch({
    'A funny male name - ': {
      topic: new (Generateur),
      'when generated': {
        topic: function (generateur) {
          params = {
            gender: "M",
            funny: "true"
          };
          return generateur.getName(params);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a male gender': function (result) {
          assert.equal(result.gender, "M");
        },
        'it should have a param "funny" set to false': function (result) {
          assert.equal(result.funny, true);
        }
      }
    }
  })
  .addBatch({
    'A not funny female name - ': {
      topic: new (Generateur),
      'when generated': {
        topic: function (generateur) {
          params = {
            gender: "F",
            funny: "false"
          };
          return generateur.getName(params);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a female gender': function (result) {
          assert.equal(result.gender, "F");
        },
        'it should have a param "funny" set to false': function (result) {
          assert.equal(result.funny, false);
        }
      }
    }
  })
  .addBatch({
    'A not funny male name - ': {
      topic: new (Generateur),
      'when generated': {
        topic: function (generateur) {
          params = {
            gender: "M",
            funny: "false"
          };
          return generateur.getName(params);
        },
        'it should have a valid name': function (result) {
          assert.equal(typeof(result.name), 'string')
        },
        'it should have a gender': function (result) {
          assert.ok(result.gender);
        },
        'it should have a male gender': function (result) {
          assert.equal(result.gender, "M");
        },
        'it should have a param "funny" set to false': function (result) {
          assert.equal(result.funny, false);
        }
      }
    }
  })
  .export(module);