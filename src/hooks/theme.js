import { useState } from 'react'

export const useDark = () => {
  const themeOs = (() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })()

  if (themeOs.includes('dark')) {
    document.documentElement.classList.add(themeOs)
  } else {
    document.documentElement.classList.add(themeOs)
  }
  window.localStorage.setItem('theme', themeOs)
  const [theme, setTheme] = useState(themeOs)
  const handleTheme = () => {
    setTheme(prev => {
      if (window.localStorage.getItem('theme').includes('dark')) {
        const curretClass = document.documentElement.classList.value
        document.documentElement.classList.remove(curretClass)
        document.documentElement.classList.add('light')
        localStorage.setItem('theme', 'light')
        return 'light'
      }
      if (window.localStorage.getItem('theme').includes('light')) {
        const curretClass = document.documentElement.classList.value
        document.documentElement.classList.remove(curretClass)
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        return 'dark'
      }
    })
  }
  return { themeOs, theme, handleTheme }
}

export const handleColorTheme = () => {
  const classDark = document.documentElement.classList.value
  if (window.localStorage.theme.includes('dark')) {
    document.documentElement.classList.remove(classDark)
    const randonDark = 'dark' + Math.floor(Math.random() * 10)
    document.documentElement.classList.add(randonDark)
    localStorage.setItem('theme', randonDark)
  } else if (window.localStorage.theme.includes('light')) {
    document.documentElement.classList.remove(classDark)
    const randonLight = 'light' + Math.floor(Math.random() * 10)
    document.documentElement.classList.add(randonLight)
    localStorage.setItem('theme', randonLight)
  }
}
export const useMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return { isOpenMenu, handleMenu }
}
export const soundHover = new Audio('/mousehover.mp3')
