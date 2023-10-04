import './styles/MainProject.css'

export const MainBlog = () => {
  return (
    <article id="blog">
      <article className="card cardBlog">
        <h2>Book: Steve Jobs</h2>
        <img
          src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4bc38ec4-8f4b-473f-99f7-a815b96a703d%2FSteve_Jobs.avif?id=f284f8c0-f015-4918-8b36-3a9a52d60c31&table=block"
          alt=""
        />
      </article>
      <article className="card cardBlog">
        <h2>CSS: Bordes Translúcidos</h2>
        <img
          src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5489d822-2fe9-4ad2-a329-fc771a77a3ff/Untitled/w=3840,quality=80"
          alt=""
        />
      </article>
      <article className="card cardBlog">
        <h2>Book: Ready Player One</h2>
        <img
          src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c650cf9a-6770-4e45-a0a0-a59e54967ea3/ready_player_one/w=640,quality=80"
          alt=""
        />
      </article>
      <article className="card cardBlog">
        <h2>CSS: Crear Múltiples Bordes</h2>
        <img
          src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/92e03bef-bb0b-459a-bacf-6f1729ecfe7b/Untitled/w=1080,quality=80"
          alt=""
        />
      </article>
      <article className="card cardBlog">
        <h2>CSS: Posicionamiento de Fondo</h2>
        <img
          src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/81605760-c855-4d0e-a13e-fc7bd99e35b4/Untitled/w=1080,quality=80"
          alt=""
        />
      </article>
      <a href="https://notiblogs.super.site/" target="_blank" rel="noreferrer">
        <article className="card cardBlog">
          <h2 className="vermas">Ver Mas</h2>
          <svg className="cursorPlus" width="38" height="38" viewBox="0 0 38 38">
            <path d="M0 37.8234V38H38V0H37.8234L0 37.8234Z" />
          </svg>
        </article>
      </a>
    </article>
  )
}
