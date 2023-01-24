import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_LENGUAGE } from '../../reducers/slice'
import CV from '../../documents/CV_DEVELOPER.pdf'
import '../../styles/style.css'

export default function () {

    const language = useSelector(state => state.settings.language)
    const dispatch = useDispatch()

  return (
    <div className='barmenu-container d-flex px-5 align-items-center justify-content-between vw-100'>
        <div>
            <a className='barmenu-title barmenu-white-text d-flex' href='#home'>
                <h5 className='barmenu-white-text font-weight-bolder mr-2 my-auto'>Claret</h5>
                <h5 className='barmenu-white-text my-auto'>Devigne</h5>
            </a>
        </div>
        {
                (language === 'ENGLISH') ?
            <div className='barmenu-links-sm d-flex' style={{ gap: '1rem' }}>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#about-me' >About me</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#certificates' >Certificates</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#projects' >Projects</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#contact' >Contact</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#youtube' >Youtube</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#blog' >Blog</a></div>
            </div>
            :
            <div className='barmenu-links-sm d-flex' style={{ gap: '1rem' }}>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#about-me'>Sobre mi</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#projects'>Certificados</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#certificates'>Proyectos</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#contact' >Contacto</a></div>
                <div className='barmenu-div-links'><a className='barmenu-white-text' href='#youtube' >Youtube</a></div>
            <div className='barmenu-div-links'><a className='barmenu-white-text' href='#blog' >Blog</a></div>
        </div>
        }
        
        <div className='d-flex'>
            <div className='barmenu-languages d-flex align-items-center mr-3'>
                <div className='mr-1 barmenu-div-links barmenu-white-text' onClick={() => dispatch(CHANGE_LENGUAGE('ENGLISH'))}>
                    {
                        (language === 'ENGLISH') ? 'ENGLISH' : 'INGLÉS'
                    }
                </div>
                <div className='mr-1'>|</div>
                <div className='barmenu-div-links barmenu-white-text' onClick={() => dispatch(CHANGE_LENGUAGE('ESPAÑOL'))}>
                    {
                        (language === 'ENGLISH') ? 'SPANISH' : 'ESPAÑOL'
                    }
                </div>
            </div>
            <a href={CV} target='_blank'>
                <div className='barmenu-links-sm barmenu-btn btn border-0'>
                    {
                        (language === 'ENGLISH') ?
                        'DOWNLOAD CV'
                        :
                        'DESCARGAR CV'
                    }
                </div>
            </a>
        </div>
    </div>
  )
}
