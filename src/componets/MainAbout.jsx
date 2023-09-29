import { Css, Express, Html, JavaScript, Nest, Node, React, Tailwind } from './icons/Icons'
import './styles/MainAbout.css'

export const MainAbout = () => {
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
      <p className="paragraphAbout">
        Hi, my name is Alex Chipre and I began using WordPress when first began. I’ve spent most of
        my waking hours for the last ten years designing, programming and operating WordPress sites
        go beyond with exclusive designer. Apart from this I love to travel, mentor designers,
        review design portfolios & read books on everything related to design. I have also given
        design talks in various educational institutions. So I love creating creative content, and
        you can find most of my works here.
      </p>
      <div className="technology">
        <h2>Technologies</h2>
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
