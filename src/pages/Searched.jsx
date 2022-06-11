import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY

const Searched = () => {
  const [searchResult, setSearchResult] = useState([])
  const params = useParams()

  const getSearch = async (query) => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`
    )

    setSearchResult(res.data.results)
  }

  useEffect(() => {
    getSearch(params.value)
  }, [params.value])

  return (
    <Grid>
      {searchResult.map((item) => {
        return (
          <Link key={item.id} to={`/details/${item.id}`}>
            <Card>
              <img src={item.image} alt='' />
              <p>{item.title}</p>
            </Card>
          </Link>
        )
      })}
    </Grid>
  )
}

export default Searched

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  img {
    border-radius: 1rem;
  }

  p {
    text-align: center;
    padding: 0 2rem;
  }
`
