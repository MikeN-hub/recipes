import React from 'react'
import { motion } from 'framer-motion'
import Popular from '../components/Popular'
import Vegeterian from '../components/Vegeterian'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Popular />
      <Vegeterian />
    </motion.div>
  )
}

export default Home
