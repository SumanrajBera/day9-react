import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  return (
    <div className='home'>
        <h1>Your one stop destination</h1>
        <button onClick={() => {
          navigate("/catalog")
        }}>Explore</button>
    </div>
  )
}

export default Home