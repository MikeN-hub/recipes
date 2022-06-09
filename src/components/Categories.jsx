import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiChopsticks, GiNoodles } from 'react-icons/gi'

const Categories = () => {
  return (
    <Wrapper>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice size={'2rem'} />
        <p>Italian</p>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger size={'2rem'} />
        <p>American</p>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles size={'2rem'} />
        <p>Thai</p>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiChopsticks size={'2rem'} />
        <p>Chinese</p>
      </SLink>
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
  margin: 2rem auto;

  &svg {
    cursor: pointer;
  }
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
