const mongoose = require("mongoose");
// schema
const RecipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
});
// module
module.exports = mongoose.model("recipe", RecipeSchema);


