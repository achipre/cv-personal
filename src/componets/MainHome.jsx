import './styles/MainHome.css'

export const MainHome = ({ secVisibleRef }) => {
  console.log(secVisibleRef)
  return (
    <article id="home" ref={secVisibleRef}>
      <h1>ALEX CHIPRE</h1>
      <h2>Full Stack Developer</h2>
      <p className="homeParagraph">
        I strives to build immersive and beautiful web applications through carefully crafted
        user-centric design.
      </p>
    </article>
  )
}
