import { useRef, useEffect } from 'react'
import { Header } from './componets/Header'
import './App.css'
import { handleColorTheme, useDark, useMenu } from './hooks/theme'
import { Menu } from './componets/Menu'
import { AsidePortfolio } from './componets/AsidePortfolio'
import { MainHome } from './componets/MainHome'
import { MainAbout } from './componets/MainAbout'
import { MainProjects } from './componets/MainProjects'
import { MainBlog } from './componets/MainBlog'
import { MainContact } from './componets/MainContact'

export function App () {
  const { themeOs, theme, handleTheme } = useDark()
  const { isOpenMenu, handleMenu } = useMenu()
  const closeMenu = () => {
    handleMenu()
  }
  const titleSection = useRef('Home')
  const titleHome = null
  const titleAbout = null
  const titleProject = null
  const titleBlog = null
  const titleContact = null

  const secVisibleRef = useRef(false)
  const isVisibleSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        titleSection.current = 'Home'
      } else {
        titleSection.current = 'About'
      }
    })
  }
  useEffect(() => {
    const visibleSecRef = secVisibleRef.current
    const observer = new IntersectionObserver(isVisibleSection, {})
    observer.observe(visibleSecRef)
    window.addEventListener('scroll', observer)
    return () => {
      window.removeEventListener('scroll', observer)
    }
  }, [isVisibleSection])
  console.log(titleSection)
  return (
    <>
      <Header
        handleMenu={handleMenu}
        isOpenMenu={isOpenMenu}
        changeTheme={handleTheme}
        theme={theme}
        changeColorful={handleColorTheme}
      />
      {isOpenMenu && <Menu closeMenu={closeMenu} classTheme={themeOs} />}
      <AsidePortfolio title={titleSection.current} />
      <MainHome secVisibleRef={secVisibleRef} titleHome={titleHome} />
      <MainAbout titleAbout={titleAbout} />
      <MainProjects titleProject={titleProject} />
      <MainBlog titleBlog={titleBlog} />
      <MainContact titleContact={titleContact} />
    </>
  )
}
