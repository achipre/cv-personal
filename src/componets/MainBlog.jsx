import './styles/MainProject.css'
import imageCss from '../assets/csstranslucid.jpg'

export const MainBlog = () => {
  return (
    <article id="blog">
      <article className="card cardBlog">
        <a
          href="https://notiblogs.super.site/anlisis-libro-steve-jobs"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Books: Steve Jobs</h2>
          <img
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4bc38ec4-8f4b-473f-99f7-a815b96a703d%2FSteve_Jobs.avif?id=f284f8c0-f015-4918-8b36-3a9a52d60c31&table=block"
            alt="Coverbook Steve Jobs"
          />
        </a>
      </article>
      <article className="card cardBlog">
        <a
          href="https://notiblogs.super.site/blog-posts/css-bordes-translcidos"
          target="_blank"
          rel="noreferrer"
        >
          <h2>CSS: Bordes Translúcidos</h2>
          <img src={imageCss} alt="Image of article Border Translucids" />
        </a>
      </article>
      <article className="card cardBlog">
        <a
          href="https://notiblogs.super.site/anlisis-libro-ready-player-one"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Books: Ready Player One</h2>
          <img
            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c650cf9a-6770-4e45-a0a0-a59e54967ea3/ready_player_one/w=640,quality=80"
            alt="Coverbook Ready PlayerOne"
          />
        </a>
      </article>
      <article className="card cardBlog">
        <a
          href="https://notiblogs.super.site/blog-posts/css-crear-mltiples-bordes"
          target="_blank"
          rel="noreferrer"
        >
          <h2>CSS: Crear Múltiples Bordes</h2>
          <img
            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/92e03bef-bb0b-459a-bacf-6f1729ecfe7b/Untitled/w=1080,quality=80"
            alt="Image of article multiples bords on CSS"
          />
        </a>
      </article>
      <article className="card cardBlog">
        <a
          href="https://notiblogs.super.site/blog-posts/css-posicionamiento-de-fondo"
          target="_blank"
          rel="noreferrer"
        >
          <h2>CSS: Posicionamiento de Fondo</h2>
          <img
            src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/81605760-c855-4d0e-a13e-fc7bd99e35b4/Untitled/w=1080,quality=80"
            alt="Image of article Position Background"
          />
        </a>
      </article>

      <a href="https://notiblogs.super.site/" target="_blank" rel="noreferrer">
        <article className="card cardBlog">
          <h2 className="vermas">See more...</h2>
          <svg className="cursorPlus" width="38" height="38" viewBox="0 0 38 38">
            <path d="M0 37.8234V38H38V0H37.8234L0 37.8234Z" />
          </svg>
        </article>
      </a>
    </article>
  )
}
