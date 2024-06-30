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
import { ToastMessage } from './componets/ToastMessage'

export function App () {
  const { themeOs, theme, handleTheme } = useDark()
  const { isOpenMenu, handleMenu } = useMenu()
  const closeMenu = () => {
    handleMenu()
  }

  const [sectionVisible, setSectionVisible] = useState('Home')
  const visibleRef = {
    home: useRef(null),
    about: useRef(null),
    project: useRef(null),
    blog: useRef(null),
    contact: useRef(null)
  }
  // Object.values(visibleRef).forEach(secc => console.log(secc))
  const isVisibleSec = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.target.id === 'home' && entry.isIntersecting) {
        return setSectionVisible('Home')
      } else if (entry.target.id === 'about' && entry.isIntersecting) {
        return setSectionVisible('About me')
      } else if (entry.target.id === 'project' && entry.isIntersecting) {
        return setSectionVisible('Project')
      } else if (entry.target.id === 'blog' && entry.isIntersecting) {
        return setSectionVisible('Blog')
      } else if (entry.target.id === 'contact' && entry.isIntersecting) {
        return setSectionVisible('Contact')
      }
    })
  }
  useEffect(() => {
    const visibleSecH = visibleRef.home.current
    const visibleSecA = visibleRef.about.current
    const visibleSecP = visibleRef.project.current
    const visibleSecB = visibleRef.blog.current
    const visibleSecC = visibleRef.contact.current
    const observer = new IntersectionObserver(isVisibleSec, { threshold: 0.6 })

    observer.observe(visibleSecH)
    observer.observe(visibleSecA)
    observer.observe(visibleSecP)
    observer.observe(visibleSecB)
    observer.observe(visibleSecC)
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
      <MainAbout visibleRef={visibleRef.about} />
      <MainProjects visibleRef={visibleRef.project} />
      <MainBlog visibleRef={visibleRef.blog} />
      <MainContact visibleRef={visibleRef.contact} />
      <ToastMessage />
    </>
  )
}
