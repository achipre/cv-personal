import { useEffect, useRef } from 'react'
import { Css, Express, Html, JavaScript, Nest, Node, React, Tailwind } from './icons/Icons'
import './styles/MainAbout.css'

export const MainAbout = ({ titleAbout }) => {
  const aboutSectionRef = useRef(null)
  function verificarAbout (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        titleAbout = true
      } else {
        titleAbout = false
      }
    })
  }
  useEffect(() => {
    const aboutSection = aboutSectionRef.current
    const observer = new IntersectionObserver(verificarAbout, {})
    observer.observe(aboutSection)
  }, [])
  return (
    <article id="about">
      <div className="statistics">
        <div className="projects">
          <h2>+100</h2>
          <p>Projects</p>
        </div>
        <div className="hackerRank">
          <h2>+1000</h2>
          <p>HackerRank</p>
        </div>
        <div className="figma">
          <h2>+10</h2>
          <p>Figma Designs</p>
        </div>
      </div>
      <p className="paragraphAbout" ref={aboutSectionRef}>
        Hello, my name is Alex Chipre, and I began using React technology right from the start. I
        have devoted most of my waking hours for the past two years to design, web development, and
        managing websites with React, taking my skills to the next level with exclusive designs.
        Apart from this, I love to travel, mentor designers, review design portfolios, and read
        books on everything related to design and web development. I am passionate about creating
        creative content, and you can find most of my work here.
      </p>
      <div className="technology">
        <h2>Technologies:</h2>
        <div className="iconTech">
          <Html />
          <Css />
          <JavaScript />
          <React />
          <Tailwind />
          <Node />
          <Express />
          <Nest />
        </div>
      </div>
    </article>
  )
}
