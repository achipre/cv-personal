import './styles/MainContact.css'

export const MainContact = () => {
  return (
    <article id='contact'>
      <h2>SEND ME A MESSAGE</h2>
      <form className='formulario'>
        <input type="text" name="" id="" placeholder='FULL NAME'/>
        <input type="email" name="" id="" placeholder='EMAIL'/>
        <textarea name="" id="" cols="1" rows="1" placeholder='MESSAGE'></textarea>
        <button>SEND MESSAGE</button>
      </form>
      <p>Elaborado por: <span>Alex Chipre</span></p>
    </article>
  )
}
