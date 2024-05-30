// import { useRef, useEffect, useState } from 'react'

import './styles/MainHome.css'

export const MainHome = ({ visibleRef }) => {
  return (
    <article className='sectionAnimate' id="home" ref={visibleRef}>
      <h1>ALEX CHIPRE</h1>
      <h2>Full Stack Developer</h2>
      <p className="homeParagraph">
        I strives to build immersive and beautiful web applications through carefully crafted
        user-centric design.
      </p>
    </article>
  )
}
