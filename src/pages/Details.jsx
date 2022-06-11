import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

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
            <div>
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <ul>
              {recipe.extendedIngredients.map((item) => {
                return <li key={item.id}>{item.name}</li>
              })}
            </ul>
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
    text-align: center;
  }

  img {
    width: 100%;
  }
`

const RightSide = styled.div`
  flex: 2;
  margin-left: 5rem;

  button {
    padding: 1rem 2rem;
    background-color: white;
    border: 1px solid black;
    color: #141313;
    margin-right: 2rem;
    font-weight: bold;
    font-size: 1rem;
  }
`

const Info = styled.div`
  margin-top: 2rem;

  li {
      line-height: 2.5rem;
      font-size: 1.2rem;
    }
`
