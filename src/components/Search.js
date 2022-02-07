import { useState } from 'react'
import './Search.css'

function Search({ setQuery, error }) {
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
    <form onSubmit={onSubmit} className="search-wrapper">
      <input
        placeholder="날씨가 궁금해요..."
        onChange={onChange}
        value={input}
        className="search-box"
      />
    </form>
  )
}

export default Search
