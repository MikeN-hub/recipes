import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Card from './Card'
const API_KEY = process.env.REACT_APP_API_KEY

const Vegeterian = () => {
  const [vegeterianRecipes, setVegeterianRecipes] = useState([])
  const getRecipes = async () => {
    const storageData = localStorage.getItem('vegeterianReceipes')
    if (storageData) {
      setVegeterianRecipes(JSON.parse(storageData))
    } else {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20&tags='vegetarian`
        )
        localStorage.setItem(
          'vegeterianReceipes',
          JSON.stringify(res.data.recipes)
        )
        setVegeterianRecipes(res.data.recipes)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getRecipes()
    console.log(vegeterianRecipes)
  }, [])

  return (
    <div>
      <Wrapper>
        <h3>Vegeterian picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: true,
            drag: 'free',
          }}
        >
          {vegeterianRecipes.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card recipe={recipe} />
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 90%;
  margin: 2rem auto;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
`

export default Vegeterian
