import { Github, Link } from './icons/Icons'
import './styles/MainProject.css'

export const MainProjects = () => {
  return (
    <article id="project">
      <article className="cardProject">
        <h2>Encritador Web</h2>
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/128ea8179695863.Y3JvcCwzMDY4LDI0MDAsNjgsMA.png"
          alt=""
        />
        <div>
          <a href="https://www.instagram.com/chipredev/" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://twitter.com/chipredev" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
      </article>
      <article className="cardProject">
        <h2>Encritador Web</h2>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9d23c864122637.612e2b21f17c2.jpg"
          alt=""
        />
        <div>
          <a href="https://www.instagram.com/chipredev/" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://twitter.com/chipredev" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
      </article>
      <article className="cardProject">
        <h2>Encritador Web</h2>
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a01bb7179962165.Y3JvcCwzMDY4LDI0MDAsNjgsMA.png"
          alt=""
        />
        <div>
          <a href="https://www.instagram.com/chipredev/" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://twitter.com/chipredev" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
      </article>
      <article className="cardProject">
        <h2>Encritador Web para que no hagas</h2>
        <div>
          <a href="https://www.instagram.com/chipredev/" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://twitter.com/chipredev" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
      </article>
      <article className="cardProject">
        <h2>Encritador Web</h2>
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2fdc08178998937.Y3JvcCwxNjE2LDEyNjQsMCww.png"
          alt=""
        />
        <div>
          <a href="https://www.instagram.com/chipredev/" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://twitter.com/chipredev" target="_blank" rel="noreferrer">
            <Link />
          </a>
        </div>
      </article>
      <a href="https://twitter.com/chipredev" target="_blank" rel="noreferrer">
        <article className="cardProject">
          <h2>Ver Mas</h2>
          <svg className='cursorPlus'
            width="38"
            height="38"
            viewBox="0 0 38 38"
          >
            <path
              d="M0 37.8234V38H38V0H37.8234L0 37.8234Z"
            />
          </svg>
        </article>
      </a>
    </article>
  )
}
