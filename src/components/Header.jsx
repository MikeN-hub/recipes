import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

const Header = () => {
  return (
    <SNav>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link to='/'>
          <GiKnifeFork size={'3rem'} />
        </Link>
      </motion.div>
      <h1>delicious</h1>
      <motion.div className='repo' whileHover={{ scale: 1.1 }}>
        <SRepo href='https://github.com/MikeN-hub/recipes'>Repo</SRepo>
      </motion.div>
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
    color: grey;
  }

  .repo {
    margin-left: auto;
  }

  @media (max-width: 576px) {
    & {
      justify-content: center;
      gap: 1rem;
    }
  }
`
const SRepo = styled.a`
  font-size: 2rem;
  cursor: pointer;
  color: teal;
`
