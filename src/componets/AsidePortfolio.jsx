import { Github, Instagram, Linkedin, X } from './icons/Icons'
import './styles/AsidePortfolio.css'
export const AsidePortfolio = ({ sectionVisible }) => {
  const curretThemeInLocal = window.localStorage.getItem('theme')

  return (
    <aside className="asideMain">
      <h1 className="asideTitle">{sectionVisible}</h1>
      <div className="socials">
        <a href="https://github.com/achipre" target="_blank" rel="noreferrer">
          <Github curretThemeInLocal={curretThemeInLocal} />
        </a>
        <a href="https://www.linkedin.com/in/alexchipre/" target="_blank" rel="noreferrer">
          <Linkedin curretThemeInLocal={curretThemeInLocal} />
        </a>
        <a href="https://www.instagram.com/chipredev/" target="_blank" rel="noreferrer">
          <Instagram curretThemeInLocal={curretThemeInLocal} />
        </a>
        <a href="https://twitter.com/chipredev" target="_blank" rel="noreferrer">
          <X curretThemeInLocal={curretThemeInLocal} />
        </a>
      </div>
      <div className="hLineAside"></div>
      <div className="vLineAside"></div>
    </aside>
  )
}
