import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'
import plug from '../images/plug-2.jpg'

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
                <Card >
                  <Link to={`/details/${recipe.id}`}>
                    <img src={recipe.image || plug} alt={recipe.title} style={!recipe.image? {border: '1px solid grey'} : {}}/>
                    <p style={!recipe.image ? { color: 'grey', fontSize: '1rem' } : {}}>{recipe.title}</p>
                  </Link>
                </Card>
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

const Card = styled.div`
  position: relative;
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;

  p {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 10;

    @media (max-width: 992px) {
      & {
        font-size: 1rem;
      }
    }
    @media (max-width: 576px) {
      & {
        font-size: 0.5rem;
      }
    }
  }
  img {
    border-radius: 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`

export default Popular
