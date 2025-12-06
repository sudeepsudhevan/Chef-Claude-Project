import { useEffect, useRef, useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";


function Main() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("")

  const recipeSection = useRef(null)

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipe])


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
          ref={recipeSection}
        />
      )}
      {recipe && (
        <ClaudeRecipe recipe={recipe} />
      )}
    </main>
  )
}

export default Main