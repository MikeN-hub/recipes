import React from 'react'
import styled from 'styled-components'

const Card = ({ recipe }) => {
  return (
    <Item>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.title}</p>
    </Item>
  )
}

const Item = styled.div`
  height: 200px;
  width: 300px;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  object-fit: cover;

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
    top: 0;
    width: 100%;
    height: 100%;
  }
`

export default Card