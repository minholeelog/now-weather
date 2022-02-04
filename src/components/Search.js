import { useState } from 'react'

function Search({ setQuery }) {
  const [input, setInput] = useState('')

  const onChange = (event) => {
    const { value } = event.target
    setInput(value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setQuery(input)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="날씨가 궁금해요..."
        onChange={onChange}
        value={input}
      />
      <button>Search</button>
    </form>
  )
}

export default Search
