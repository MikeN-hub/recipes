import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <SDiv>
        <p>Bad Route!</p>
        <p>There is nothing here</p>
      </SDiv>
    </>
  )
}

export default NotFoundPage

const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`