import { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([])

  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
  })

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")

    setIngredients(
      prevIngredients => [
        ...prevIngredients,
        newIngredient
      ]
    )
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
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </main>
  )
}

export default Main