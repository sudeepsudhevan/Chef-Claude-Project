import { useState } from "react";

function Main() {
  const [ingredients, setIngredients] = useState([])

  const listElement = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
  })

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
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
      <form className='add-ingredient-form' onSubmit={handleSubmit}>
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