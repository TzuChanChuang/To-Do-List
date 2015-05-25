var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-list');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
  item:   String,
  date: { type: Date, default: Date.now },
  done: Boolean
});

var Item = mongoose.model('Item', itemSchema);


exports.Item = Item;