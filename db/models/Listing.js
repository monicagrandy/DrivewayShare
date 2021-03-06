var bookshelf = require("../dbconfig.js").bookshelf;
var User = require("./User.js")
var Day = require("./Day.js")


var Listing = bookshelf.Model.extend({

  tableName: "listings",
  hasTimestamps: true,

  user: function() {
    return this.belongsTo(User, "user_id");
  },

  days: function() {
    return this.hasMany(Day);
  }
});

module.exports = Listing;
