import { Github, Link } from './icons/Icons'
import imagereactshop from '../assets/reactshop.webp'
import imagesearchmovie from '../assets/searchmovie.webp'

import './styles/MainProject.css'

export const MainProjects = ({ visibleRef }) => {
  return (
    <article className='sectionAnimate' id="project" ref={visibleRef}>
      <article className="card cardProject">
        <h2>Social Clone</h2>
        <img
          src="https://res.cloudinary.com/dwtmwmafj/image/upload/v1708467414/Portfolio/jpghfnfrzqyt0ibn6ar4.webp"
          alt="Project of Instagram Clone"
        />
        <div>
          <a
            href="https://github.com/achipre/insta-clone"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a href="https://photogram-clone.netlify.app" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
      </article>
      <article className="card cardProject">
        <h2>Tic-Tac-Toe</h2>
        <img
          src="https://res.cloudinary.com/dwtmwmafj/image/upload/v1696374199/uuvzeapgmlv04dezd9v8.png"
          alt="Project of TicTacToe"
        />
        <div>
          <a
            href="https://github.com/achipre/tic-tac-toe--beginner"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a href="https://tresenraya-reactjs.netlify.app/" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
      </article>
      <article className="card cardProject">
        <h2>Encrypt Web</h2>
        <img
          src="https://res.cloudinary.com/dwtmwmafj/image/upload/v1696375471/Portfolio/x6smqzucr2k25slxdobr.png"
          alt="Project to Web Encript"
        />
        <div>
          <a
            href="https://github.com/achipre/encriptaydesencripta"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://achipre.github.io/encriptaydesencripta/"
            target="_blank"
            rel="noreferrer"
          >
            <Link />
          </a>
        </div>
      </article>

      <article className="card cardProject">
        <h2>Search Movie</h2>
        <img src={imagesearchmovie} alt="Project of Movie App" />
        <div>
          <a
            href="https://github.com/achipre/prueba-tecnica-junior--reactjs"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://pruebatecnicajunior-reactjs.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Link />
          </a>
        </div>
      </article>
      <article className="card cardProject">
        <h2>Shopping Cart</h2>
        <img src={imagereactshop} alt="Project of Shopping Cart" />
        <div>
          <a
            href="https://github.com/achipre/prueba-tecnica-ecommerce--reactjs"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a href="https://twitter.com/chipredev" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
      </article>
      <a href="https://github.com/achipre?tab=repositories" target="_blank" rel="noreferrer">
        <article className="card cardProject">
          <h2 className="vermas">See more...</h2>
          <svg className="cursorPlus" width="38" height="38" viewBox="0 0 38 38">
            <path d="M0 37.8234V38H38V0H37.8234L0 37.8234Z" />
          </svg>
        </article>
      </a>
    </article>
  )
}
