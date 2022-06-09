import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Categories from '../components/Categories'

const API_KEY = process.env.REACT_APP_API_KEY

const Cuisine = () => {
  const [recipes, setRecipes] = useState([])
  const params = useParams()

  const getRecipes = async (type) => {
    const storageData = localStorage.getItem(type)
    if (storageData) {
      setRecipes(JSON.parse(storageData))
    } else {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${type}&number=20`
        )
        localStorage.setItem(type, JSON.stringify(res.data.results))
        setRecipes(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    // setType(params.type)
    getRecipes(params.type)
  }, [params.type])

  return (
    <div>
      <Categories />
      <SHeader>
        <h1>{params.type} dishes</h1>
      </SHeader>
      <Grid>
        {recipes.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </Card>
        ))}
      </Grid>
    </div>
  )
}

export default Cuisine

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem;
  margin: 2rem;
`

const Card = styled.div`
  position: relative;
  border-radius: 1rem;

  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
`

const SHeader = styled.header`
  margin: 2rem auto;
  h1 {
    text-align: center;
  }
`
