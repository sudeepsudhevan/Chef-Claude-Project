import React from 'react'

function Main() {
  return (
    <main className='main'>
        <form className='add-ingredient-form'>
            <input 
                aria-label='Add ingredient' 
                type="text" 
                placeholder='e.g. oregano'
            />
            <button>Add ingredient</button>
        </form>
    </main>
  )
}

export default Main