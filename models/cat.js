var mongoose = require("mongoose");
var Scema = mongoose.Schema;

var catScema = newScema({
    Name : String,
    from : String,
    caracter :string
});

var Cat=mongoose.model("Cat", catScema);
module.exports.Cat=Cat;