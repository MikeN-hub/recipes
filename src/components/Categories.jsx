import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiChopsticks, GiNoodles } from 'react-icons/gi'

const Categories = () => {
  return (
    <Wrapper>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
      >
        <SLink to={'/cuisine/Italian'}>
          <FaPizzaSlice size={'2rem'} />
          <p>Italian</p>
        </SLink>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
      >
        <SLink to={'/cuisine/American'}>
          <FaHamburger size={'2rem'} />
          <p>American</p>
        </SLink>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
      >
        <SLink to={'/cuisine/Thai'}>
          <GiNoodles size={'2rem'} />
          <p>Thai</p>
        </SLink>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
      >
        <SLink to={'/cuisine/Chinese'}>
          <GiChopsticks size={'2rem'} />
          <p>Chinese</p>
        </SLink>
      </motion.div>
    </Wrapper>
  )
}

export default Categories

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  width: 100%;
  margin: 4rem auto;

  &svg {
    cursor: pointer;
  }
`

const SLink = styled(NavLink)`
  width: 5rem;
  height: 5rem;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p,
  svg {
    color: white;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    transition: 2s ease-in-out;
  }
  
  @media (max-width: 768px) {
    & {
      width: 4rem;
      height: 4rem;
    }
  }
`
