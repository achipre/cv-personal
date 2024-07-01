import { useState } from 'react'
import './styles/ToastMessage.css'

export const ToastMessage = () => {
  const [visible, setVisible] = useState(true)
  const closeToast = (e) => {
    e.stopPropagation()
    setVisible(false)
  }
  return (
    <div className='dowloadCV'>
      {
        visible

          ? <>
          <article className='card messageToast toastDownload'>
           <a className='linkopenCV' href='resumen.pdf' target='_blank' rel="noopener noreferrer">
        </a>
            <h2 id='text-cv'>Curriculum Vitae <span>⬇</span></h2>
          <div onClick={closeToast} className="closedToast">╳</div>
          </article>
          </>
          : ''
        }
    </div>

  )
}
