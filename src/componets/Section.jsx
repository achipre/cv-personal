import { AsidePortfolio } from './AsidePortfolio'
import './Section.css'

export const Section = ({ title }) => {
  return (
    <section>
      <AsidePortfolio title={title} />
      <article>
        <h1>ALEX CHIPRE</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I strives to build immersive and beautiful web applications through carefully crafted
          user-centric design.
        </p>
      </article>
    </section>
  )
}
