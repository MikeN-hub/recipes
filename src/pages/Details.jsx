import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const API_KEY = process.env.REACT_APP_API_KEY

const Details = () => {
  const [recipe, setRecipe] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  const params = useParams()

  const getDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`
      )
      setRecipe(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetails()
    // eslint-disable-next-line
  }, [params.id])

  return (
    <Wrapper>
      <LeftSide>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt='' />
      </LeftSide>
      <RightSide>
        <button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
        <button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </button>

        <Info>
          {activeTab === 'instructions' && (
            <motion.div
              initial={{ x: 1200 }}
              animate={{ x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
              }}
            >
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
            </motion.div>
          )}
          {activeTab === 'ingredients' && (
            <motion.ul
              initial={{ x: 1200 }}
              animate={{ x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
              }}
            >
              {recipe.extendedIngredients.map((item) => {
                return (
                  <li key={item.id + item.amount}>
                    {item.amount} {item.name}
                  </li>
                )
              })}
            </motion.ul>
          )}
        </Info>
      </RightSide>
    </Wrapper>
  )
}

export default Details

const Wrapper = styled.div`
  margin: 5rem 10%;
  display: flex;

  .active {
    background: linear-gradient(45deg, #494949, #313131);
    color: white;
  }
`

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  flex: 1;

  h3 {
    display: grid;
    align-items: center;
    height: 3rem;
  }

  img {
    width: 100%;
  }
`

const RightSide = styled.div`
  flex: 2;
  margin-left: 5rem;

  button {
    height: 3rem;
    padding: 1rem 2rem;
    background-color: white;
    border: 1px solid black;
    color: #141313;
    margin-right: 2rem;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    max-width: 150px;
  }
`

const Info = styled.div`
  margin-top: 2rem;

  div {
    p {
      font-size: 1.2rem;
    }
    p:nth-child(1) {
      margin-bottom: 2rem;
    }
  }

  li {
    line-height: 2.5rem;
    font-size: 1.2rem;
  }
`
