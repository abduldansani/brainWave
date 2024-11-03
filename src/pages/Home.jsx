import React from 'react'
import Hero from '../components/Hero'
import RecentPosts from '../components/RecentPosts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <RecentPosts />
        <Footer />
    </div>
  )
}

export default Home