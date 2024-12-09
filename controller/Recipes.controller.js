const RecipesRouter = require("express").Router();
const RecipeModel = require("../model/Recipe.model");

//fetch all recipes
RecipesRouter.get("/", async (req, res) => {
  try {
    const result = await RecipeModel.find();
    return res.status(200).json({
      message: "recipes fetched successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error.message,
      success: true,
    });
  }
});
// fetch a single recipeId
RecipesRouter.get("/:recipeId", async (req, res) => {
  try {
    const { recipeId } = req.params;
    const result = await RecipeModel.findById(recipeId);
    return res.status(200).json({
      message: "recipe fetched successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error.message,
      success: true,
    });
  }
});

// create a recipe
RecipesRouter.post("/createRecipe", async function (req, res) {
  try {
    const result = await RecipeModel.create(req.body);
    return res.status(200).json({
      message: "recipe created successfully",
      success: true,
    });
  } catch (error) {
    return res.status(200).json({
      message: "data is missing",
      error: error.message,
    });
  }
});

// update a recipe
RecipesRouter.put("/updateRecipe/:recipeId", async function (req, res) {
  try {
    const { recipeId } = req.params;
    const result = await RecipeModel.findByIdAndUpdate(recipeId, req.body);
    return res.status(200).json({
      message: "recipe updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error.message,
      success: true,
    });
  }
});

// delete a recipe
RecipesRouter.delete("/deleteRecipe/:recipeId", async function (req, res) {
  try {
    const { recipeId } = req.params;
    const result = await RecipeModel.findByIdAndDelete(recipeId);
    return res.status(200).json({
      message: "recipe deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong",
      error: error.message,
      success: true,
    });
  }
});
module.exports = RecipesRouter;
