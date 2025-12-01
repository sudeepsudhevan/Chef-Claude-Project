import { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([])

  const listElement = ingredients.map((ingredient) => {
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
      <ul>
        {listElement}
      </ul>
    </main>
  )
}

export default Main