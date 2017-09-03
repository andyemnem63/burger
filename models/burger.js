// Require modules and packages
var orm = require('../config/orm.js');

var food = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    // table_name, [burger_name, devoured], [forminput1, forminput2], callback
    orm.insertOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne('burger',condition, function(res) {
      cb(res);
    });
  }
};

module.exports = food;
