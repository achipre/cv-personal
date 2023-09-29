import { Header } from './componets/Header'
import './App.css'
import { handleColorTheme, useDark, useMenu } from './hooks/theme'
import { Menu } from './componets/Menu'
import { Section } from './componets/Section'

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
      <Section title="Home" />
      <Section title="About me" />
      <Section title="Projects" />
      {/* <Section title="Blog" />
      <Section title="Contact" /> */}
    </>
  )
}
