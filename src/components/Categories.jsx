import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiChopsticks, GiNoodles } from 'react-icons/gi'

const Categories = () => {
  return (
    <Wrapper>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice size={'2rem'} />
      </NavLink>
      <NavLink to={'/cuisine/American'}>
        <FaHamburger size={'2rem'} />
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiNoodles size={'2rem'} />
      </NavLink>
      <NavLink to={'/cuisine/Japan'}>
        <GiChopsticks size={'2rem'} />
      </NavLink>
    </Wrapper>
  )
}

export default Categories

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: 3rem;
  width: 100%;
  margin: 20 auto;

  svg {
    cursor: pointer;
  }
`
