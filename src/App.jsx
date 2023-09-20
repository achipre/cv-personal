import { Header } from './componets/Header'
import './App.css'
import { handleColorTheme, useDark, useMenu } from './hooks/theme'
import { Menu } from './componets/Menu'

export function App () {
  const { themeOs, theme, handleTheme } = useDark()
  const { isOpenMenu, handleMenu } = useMenu()
  return (
    <>
      <Header handleMenu={handleMenu} isOpenMenu={isOpenMenu} changeTheme={handleTheme} theme={theme} changeColorful={handleColorTheme}/>
      {isOpenMenu && <Menu classTheme={themeOs}/>}
    </>
  )
}
