import React from 'react'
import Navbar from '../components/Navbar'
import HomePage_Hero from '../components/HomePage_Hero'
import TalkDigitally from '../components/TalkDigitally'
import { Link } from 'react-router-dom'
import Footer from '../components/FooterSection'

const Blogs = () => {

    const TalkDigitallyData = [
        {
          title: "We're hiring",
          desc: 'Find your next role in marketing, creative, development, or operations.',
          imgurl: 'academy.jpg',
          btn_title: 'See openings',
          btn_link: '#',
        },
        {
          title: 'Capabilities',
          desc: 'We apply the full breadth of our experience to every challenge.',
          imgurl: 'capabilities.jpg',
          btn_title: 'Learn more',
          btn_link: '#',
        },
      ]

  return (
<>
    <Navbar />
    <HomePage_Hero />
    <TalkDigitally data={TalkDigitallyData}></TalkDigitally>
    <Footer />
</>
    )
}

export default Blogs