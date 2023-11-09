import { useForm } from 'react-hook-form'
import './styles/MainContact.css'

export const MainContact = ({ titleContact }) => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm()
  const handled = () => {
    console.log('Send Message')
  }

  return (
    <>
      <article id="contact" ref={titleContact}>
        <h2>SEND ME A MESSAGE</h2>
        <form
          action="https://formsubmit.co/2d176eae38a4c77d0f49222fff14f2e4"
          method="POST"
          className="formulario "
          id="form"
          onSubmit={handleSubmit(handled)}
        >
          <input
            {...register('fullName', { required: true })}
            name="fullName"
            className="formcontato__input"
            type="text"
            placeholder="FULL NAME"
          />
          {errors?.fullName?.type === 'required' && (
            <p className="errorMessage">*Please fill out this field.</p>
          )}
          <input
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi
            })}
            name="email"
            id="email"
            className="formcontato__input"
            placeholder="EMAIL"
          />
          {errors?.email?.type === 'required' && (
            <p className="errorMessage">*Please fill out this field.</p>
          )}
          {errors?.email?.type === 'pattern' && (
            <p className="errorMessage">*Please type a correct email address.</p>
          )}
          <textarea
            {...register('message', { required: true })}
            name="message"
            className="formcontato__textarea"
            rows="5"
            cols="40"
            id="message"
            placeholder="MESSAGE"
          ></textarea>
          {errors?.message?.type === 'required' && (
            <p className="errorMessage">*Please fill out this field.</p>
          )}
          <input type="submit" id="button" value="SEND MESSAGE" />
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
