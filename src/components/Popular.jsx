import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Card from './Card'
const API_KEY = process.env.REACT_APP_API_KEY

const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState([])
  const getRecipes = async () => {
    const storageData = localStorage.getItem('popularReceipes')
    if (storageData) {
      setPopularRecipes(JSON.parse(storageData))
    } else {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20`
        )
        localStorage.setItem(
          'popularReceipes',
          JSON.stringify(res.data.recipes)
        )
        setPopularRecipes(res.data.recipes)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <Wrapper>
        <h3>Popular picks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: true,
            pagination: true,
            drag: 'free',
            gap: '2rem',
          }}
        >
          {popularRecipes.map((recipe) => {
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

  img {
    width: 100%;
  }
`

export default Popular
