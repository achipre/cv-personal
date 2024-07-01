import { useForm } from 'react-hook-form'
import './styles/MainContact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './styles/ToastMessage.css'

export const MainContact = ({ visibleRef }) => {
  const form = useRef()
  const [valueButton, setValueButton] = useState('SEND MESSAGE')
  const [visible, setVisible] = useState(false)
  const closeToast = () => {
    setVisible(false)
  }
  const closeToastTime = () => {
    setTimeout(() => {
      setVisible(false)
    }, 5000)
  }
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit
  } = useForm()
  const handled = () => {
    setValueButton('SENDING...')
    const serviceID = 'default_service'
    const templateID = 'template_yntpglo'

    emailjs
      .sendForm(serviceID, templateID, form.current, 'SU5d0oyVHaJEhz5U6')
      .then(
        () => {
          setTimeout(() => {
            setValueButton('SUCCESS')
            reset()
          }, 250)
          setTimeout(() => {
            setVisible(true)
            closeToastTime()
            setValueButton('SEND MESSAGE')
          }, 1000)
        },
        (err) => {
          alert(JSON.stringify(err))
        }
      )
  }

  return (
    <article className="sectionAnimate" id="contact" ref={visibleRef}>
      <h2>SEND ME A MESSAGE</h2>
      <form
        ref={form}
        className="formulario "
        id="form"
        onSubmit={handleSubmit(handled)}
      >
        <input
          {...register('from_fullname', { required: true })}
          id="fullname"
          className="formcontato__input"
          type="text"
          placeholder="FULL NAME"
        />
        {errors?.from_fullname?.type === 'required' && (
          <p className="errorMessage">*Please fill out this field.</p>
        )}
        <input
          {...register('from_email', {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi
          })}
          id="email"
          className="formcontato__input"
          placeholder="EMAIL"
        />
        {errors?.from_email?.type === 'required' && (
          <p className="errorMessage">*Please fill out this field.</p>
        )}
        {errors?.from_email?.type === 'pattern' && (
          <p className="errorMessage">*Please type a correct email address.</p>
        )}
        <textarea
          {...register('message', { required: true })}
          className="formcontato__textarea"
          rows="5"
          cols="40"
          id="message"
          placeholder="MESSAGE"
        ></textarea>
        {errors?.message?.type === 'required' && (
          <p className="errorMessage">*Please fill out this field.</p>
        )}
        <input type="submit" id="button" value={valueButton} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://chipre.netlify.app/" />
      </form>
      <p>
        Elaborado por: <span>Alex Chipre</span>
      </p>
      <div>
      {
        visible

          ? <article className='card messageToast'>
          <h2 id='ToastMessage'>✓  Sent Message</h2>
          <div onClick={closeToast} className="closedToast">╳</div>
        </article>
          : ''
      }
    </div>
    </article>
  )
}
