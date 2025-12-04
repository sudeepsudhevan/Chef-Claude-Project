import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";


function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("")

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")

    setIngredients(
      prevIngredients => [
        ...prevIngredients,
        newIngredient
      ]
    )
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    // console.log(recipeMarkdown);
    
    setRecipe(recipeMarkdown);
    
  }

  return (
    <main className='main'>
      <form className='add-ingredient-form' action={addIngredient}>
        <input
          aria-label='Add ingredient'
          type="text"
          placeholder='e.g. oregano'
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList 
          ingredients={ingredients} 
          getRecipe={getRecipe} 
        />
      )}
      {recipe && (
        <ClaudeRecipe recipe={recipe} />
      )}
    </main>
  )
}

export default Main