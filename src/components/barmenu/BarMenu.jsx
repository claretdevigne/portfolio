import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_LENGUAGE } from '../../reducers/slice'
import CV from '../../documents/CVDEVELOPER.pdf'
import '../../styles/style.css'

export default function () {

  const language = useSelector(state => state.settings.language)
  const dispatch = useDispatch()
  const content = {
    en: {
      a: "About me",
      b: "Certificates",
      c: "Projects",
      d: "Contact",
      e: "Youtube",
      f: "Blog",
    },
    es: {
      a: "Sobre mi",
      b: "Certificados",
      c: "Proyectos",
      d: "Contacto",
      e: "Youtube",
      f: "Blog",
    }
  }

  return (
    <div className='barmenu-container d-flex px-5 align-items-center justify-content-between vw-100'>
      <div>
        <a className='barmenu-title barmenu-white-text d-flex' href='#home'>
          <h5 className='barmenu-white-text font-weight-bolder mr-2 my-auto'>Claret</h5>
          <h5 className='barmenu-white-text my-auto'>Devigne</h5>
        </a>
      </div>
      <div className='barmenu-links-sm d-flex' style={{ gap: '1rem' }}>
        <div className='barmenu-div-links'><a className='barmenu-white-text' href='#about-me' >{ content[language].a }</a></div>
        <div className='barmenu-div-links'><a className='barmenu-white-text' href='#certificates' >{ content[language].b }</a></div>
        <div className='barmenu-div-links'><a className='barmenu-white-text' href='#projects' >{ content[language].c }</a></div>
        <div className='barmenu-div-links'><a className='barmenu-white-text' href='#contact' >{ content[language].d }</a></div>
        <div className='barmenu-div-links'><a className='barmenu-white-text' href='#youtube' >{ content[language].e }</a></div>
        <div className='barmenu-div-links'><a className='barmenu-white-text' href='#blog' >{ content[language].f }</a></div>
      </div>


      <div className='d-flex'>
        <div className='barmenu-languages d-flex align-items-center mr-3'>
          <div className='mr-1 barmenu-div-links barmenu-white-text' onClick={() => dispatch(CHANGE_LENGUAGE('en'))}>
            {
              (language === 'en') ? 'ENGLISH' : 'INGLÉS'
            }
          </div>
          <div className='mr-1'>|</div>
          <div className='barmenu-div-links barmenu-white-text' onClick={() => dispatch(CHANGE_LENGUAGE('es'))}>
            {
              (language === 'en') ? 'SPANISH' : 'ESPAÑOL'
            }
          </div>
        </div>
        <a href={CV} target='_blank'>
          <div className='barmenu-links-sm barmenu-btn btn border-0'>
            {
              (language === 'en') ?
                'DOWNLOAD CV'
                :
                'DESCARGAR CV'
            }
          </div>
        </a>
      </div>
    </div >
  )
}
