import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
    getRecipes(params.type)
  }, [params.type])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <SHeader>
        <h1>{params.type} dishes</h1>
      </SHeader>
      <Grid>
        {recipes.map((item) => (
          <Card key={item.id}>
            <Link to={`/details/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </Link>
          </Card>
        ))}
      </Grid>
    </motion.div>
  )
}

export default Cuisine

const SHeader = styled.header`
  margin: 2rem auto;
  h1 {
    text-align: center;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3rem;
  margin: 2rem 3rem;
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

    @media (max-width: 562px) {
      & {
        width: 60%;
      }
    }
  }
  img {
    border-radius: 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
