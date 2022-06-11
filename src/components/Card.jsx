import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({ recipe }) => {

  return (
    <Link to={`/details/${recipe.id}`}>
      <Item>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.title}</p>
      </Item>
    </Link>
  )
}

const Item = styled.div`
  position: relative;
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;

  p {
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 10;
  }
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
  }
`

export default Card
