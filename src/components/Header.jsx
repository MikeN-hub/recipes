import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

const Header = () => {
  return (
    <SNav>
      <Link to='/'>
        <GiKnifeFork size={'3rem'} />
      </Link>
      <h1>delicious</h1>
    </SNav>
  )
}

export default Header

const SNav = styled.nav`
  margin: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  svg {
    cursor: pointer;
  }

  h1 {
    font-size: 2rem;
  }
`
