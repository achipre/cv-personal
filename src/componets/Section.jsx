import { AsidePortfolio } from './AsidePortfolio'
import { MainHome } from './MainHome'
import { MainAbout } from './MainAbout'
import { MainProjects } from './MainProjects'
import { MainBlog } from './MainBlog'
import { MainContact } from './MainContact'
import './styles/Section.css'
export const Section = ({ title }) => {
  return (
    <section className={`article${title}`}>
      <AsidePortfolio title={title} />
      {title === 'Home' && <MainHome />}
      {title === 'About me' && <MainAbout />}
      {title === 'Projects' && <MainProjects />}
      {title === 'Blog' && <MainBlog />}
      {title === 'Contact' && <MainContact />}
    </section>
  )
}
