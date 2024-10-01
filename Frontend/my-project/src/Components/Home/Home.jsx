import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Freebooks from '../Freebooks/Freebooks'

const Home = () => {
  return (
    <div>
        <div><Navbar/></div>
        <div><Banner/></div>
        <div><Freebooks/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Home