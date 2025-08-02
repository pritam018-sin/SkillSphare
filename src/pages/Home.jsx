import React from 'react'
import HeroSection from '../components/HeroSection'
import CoursesPreview from '../components/CoursesPreview'
import BlogPreview from '../components/BlogPreview'
import ContactCTA from '../components/ContactCTA'

const Home = () => {
  return (
    <div className="font-grotesk text-white space-y-10 pb-20">
      <HeroSection />
      <CoursesPreview />
       <BlogPreview />
       <ContactCTA />
    </div>
  )
}

export default Home
