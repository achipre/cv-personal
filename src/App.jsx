import { useRef, useEffect, useState } from 'react'
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

  const [sectionVisible, setSectionVisible] = useState('Home')
  const visibleRef = { home: useRef(null) }
  const isVisibleSec = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setSectionVisible('Home')
      } else {
        setSectionVisible('About me')
      }
    })
  }
  useEffect(() => {
    const visibleSec = visibleRef.home.current
    const observer = new IntersectionObserver(isVisibleSec, { rootMargin: '-64px' })

    Object.values(visibleRef).forEach(() => {
      observer.observe(visibleSec)
    })
  }, [])

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
      <AsidePortfolio sectionVisible={sectionVisible} />
      <MainHome visibleRef={visibleRef.home} />
      <MainAbout />
      <MainProjects />
      <MainBlog />
      <MainContact />
    </>
  )
}
