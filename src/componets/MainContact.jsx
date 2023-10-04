import './styles/MainContact.css'

export const MainContact = () => {
  return (
    <>
      <article id="contact">
        <h2>SEND ME A MESSAGE</h2>
        <form
          action="https://formsubmit.co/2d176eae38a4c77d0f49222fff14f2e4"
          method="POST"
          className="formulario"
          id="form"
        >
          <input
            name="fullName"
            className="formcontato__input"
            type="text"
            placeholder="FULL NAME"
            required
          />
          <input
            name="email"
            id="email"
            className="formcontato__input"
            type="email"
            placeholder="EMAIL"
            required
          />
          <textarea
            name="message"
            className="formcontato__textarea"
            rows="5"
            cols="40"
            id="message"
            placeholder="MESSAGE"
            required
          ></textarea>
          <button type="submit" id="button">
            SEND MESSAGE
          </button>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://chipre.netlify.app/" />

        </form>
        <p>
          Elaborado por: <span>Alex Chipre</span>
        </p>
      </article>
    </>
  )
}
