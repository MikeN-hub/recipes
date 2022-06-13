import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const [inputText, setInputText] = useState('')

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`searched/${inputText}`)
  }

  return (
    <SForm onSubmit={submitHandler}>
      <AiOutlineSearch
        size={'1.5rem'}
        color='black'
        cursor={'pointer'}
        onClick={() => navigate(`searched/${inputText}`)}
      />
      <input
        type='text'
        autoFocus
        placeholder='type to search'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </SForm>
  )
}

export default Search

const SForm = styled.form`
  display: flex;
  align-items: center;
  margin: 2rem 10%;
  border: 2px solid teal;
  border-radius: 1rem;
  background-color: #eeeef3;
  overflow: hidden;

  input {
    width: 100%;
    font-size: 1rem;
    border: none;
    padding: 0.5rem;
    outline: none;
    background-color: #eeeef3;
    color: black;
  }
  svg {
    margin-left: 0.5rem;
  }
`
