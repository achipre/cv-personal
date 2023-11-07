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
      <AsidePortfolio />
      <MainHome />
      <MainAbout />
      <MainProjects />
      <MainBlog />
      <MainContact />
    </>
  )
}
