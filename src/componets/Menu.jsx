import { soundHover } from '../hooks/theme'
import { Github, Instagram, Linkedin, X } from './icons/Icons'
import './styles/Menu.css'
export const Menu = ({ classTheme, closeMenu }) => {
  const curretThemeInLocal = window.localStorage.getItem('theme')

  const hoverMenu = () => {
    soundHover.play()
  }
  const leaveMenu = () => {
    soundHover.pause()
    soundHover.currentTime = 0
  }
  return (
    <div className={`pricipalMenu menuBack${classTheme}`}>
      <div className="titlesMenu">
        <a href="#home" className={`titleMenu ${classTheme}`}>
          <h2 onMouseEnter={hoverMenu} onMouseLeave={leaveMenu} onClick={closeMenu}>
            HOME
          </h2>
        </a>
        <a href="#about" className={`titleMenu ${classTheme}`}>
          <h2 onMouseEnter={hoverMenu} onMouseLeave={leaveMenu} onClick={closeMenu}>
            ABOUT ME
          </h2>
        </a>
        <a href="#project" className={`titleMenu ${classTheme}`}>
          <h2 onMouseEnter={hoverMenu} onMouseLeave={leaveMenu} onClick={closeMenu}>
            PROJECT
          </h2>
        </a>
        <a href="#blog" className={`titleMenu ${classTheme}`}>
          <h2 onMouseEnter={hoverMenu} onMouseLeave={leaveMenu} onClick={closeMenu}>
            BLOG
          </h2>
        </a>
        <a href="#contact" className={`titleMenu ${classTheme}`}>
          <h2 onMouseEnter={hoverMenu} onMouseLeave={leaveMenu} onClick={closeMenu}>
            CONTACT
          </h2>
        </a>
      </div>
      <div className="socials">
        <p className={`socialsTitle menuBack${classTheme}`}>
          <span>S</span>
          <span>o</span>
          <span>c</span>
          <span>i</span>
          <span>a</span>
          <span>l</span>
          <span>s</span>
        </p>
        <div className="socialsIcons">
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
      </div>
      <div className={`decorationsLine ${classTheme}`}></div>
      <div className={`decorationsLine2 ${classTheme}`}></div>
      <div className={`gridDecoration ${classTheme}`}>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
        <div className={`gridInside ${classTheme}`}></div>
      </div>
    </div>
  )
}
