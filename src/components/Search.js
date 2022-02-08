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
    const checkRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
    if (checkRegex.test(input)) {
      alert('영문 도시명을 입력하세요.')
      return
    }

    setInput('')
    setQuery(input)
  }

  return (
    <form onSubmit={onSubmit} className="search-wrapper">
      <input
        placeholder="영문 도시명을 입력하세요... ex) London"
        onChange={onChange}
        value={input}
        className="search-box"
      />
    </form>
  )
}

export default Search
