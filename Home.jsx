import React from 'react'
import '../../styles/style.css'
import JS from '../../media/javascript.png'
import REACT from '../../media/react.png'
import NODE from '../../media/node.png'
import PYTHON from '../../media/python.png'
import DJANGO from '../../media/django.png'
import GIT from '../../media/git.png'
import BOOTSTRAP from '../../media/bootstrap.png'
import SASS from '../../media/sass.png'
import CSS from '../../media/css.png'
import HTML from '../../media/html.png'
import WORLD from '../../media/world.gif'
import FOTO from '../../media/foto.jpeg'
import DS101C from '../../media/certificates/ds101-c.png'
import HTMLCSSC from '../../media/certificates/html-css-c.png'
import JAVASCRIPTC from '../../media/certificates/javascript-c.png'
import PYTHONC from '../../media/certificates/python-c.png'
import REACTC from '../../media/certificates/react-js-c.png'
import DSBADGE from '../../media/certificates/dsbadge.png'
import YOUTUBE from '../../media/youtube.gif'
import LINKEDIN from '../../media/social/in.png'
import GITHUB from '../../media/social/github.png'
import YOUTUBE_ICO from '../../media/social/youtube.png'
import INSTAGRAM from '../../media/social/instagram.png'
import FACEBOOK from '../../media/social/facebook.png'
import EMAIL from '../../media/social/email.png'
import TELEPHONE from '../../media/social/tel.png'
import INPUT_PROJECT from '../../media/projects/input.gif'
import WINDBNB_PROJECT from '../../media/projects/windbnb.gif'
import QUIZ_PROJECT from '../../media/projects/country-quiz.gif'
import TODO_APP from '../../media/projects/todo.gif'
import WEATHER_APP from '../../media/projects/weather-app.gif'
import RANDOM_APP from '../../media/projects/random-quote.gif'


import { useSelector } from 'react-redux'

export default function Home() {

  const language = useSelector(state => state.settings.language)
  const content = {
    presentation: {
      en: {
        a: "I'm Claret Devigne",
        b: "Welcome to my world!",
        c: "Full Stack Developer (Frontend y Backend). My focus is on efficiency, quality and attention to detail. I am open to new challenges and continuous learning in my career.",
        d: "Contact me"
      },
      es: {
        a: "Soy Claret Devigne",
        b: "¡Bienvenido a mi mundo!",
        c: "Desarrollador Full Stack (Frontend y Backend). Mi foco es la eficiencia, la calidad y el detalle en atención. Estoy abierto a nuevos desafíos y aprendizaje continuo en mi carrera.",
        d: "Contáctame"
      }
    }
  }

  return (
    <div>
      {/**
        *HOME SECTION 
        */}
      <a name='home'></a>
      <div className='pt-20 flex bg-black'>
        <div className='col-7 d-flex justify-content-center align-items-center'>
          <img draggable="false" className='select-none draggable-none pointer-events-none' src={WORLD} alt="space" />
        </div>
        <div className='home-home-text-container-sm col-5-sm d-flex flex-column justify-content-center'>
          <h1 className='home-home-h1-animation font-weight-bolder'>{content.presentation[language].a}</h1>
          <h2>{content.presentation[language].b}</h2>
          <h5 className='home-home-h5 mt-3 mr-5'>
            {content.presentation[language].c}
          </h5>
          <br></br>
          <div className='home-home-btn btn align-self-center border-0 justify-content-center'>
            <a className='home-a' href='#contact'>
              {content.presentation[language].d}
            </a>
          </div>
        </div>
      </div>

      {/**
        *SKILLS ANIMATED BAR SECTION
        */}
      <div className='home-skillsbar-container h-100 d-flex justify-content-center align-items-center'>
        <div className='home-skills-bar-items-container py-3 d-flex justify-content-center align-items-center'>
          <img className="home-skillsbar-item home-skills home-skills-1 w-100 mr-5" src={JS} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-2 d-block w-100 mr-5" src={REACT} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-3 d-block w-100 mr-5" src={NODE} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-4 d-block w-100 mr-5" src={PYTHON} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-5 d-block w-100 mr-5" src={DJANGO} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-6 d-block w-100 mr-5" src={GIT} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-7 d-block w-100 mr-5" src={BOOTSTRAP} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-8 d-block w-100 mr-5" src={SASS} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-9 d-block w-100 mr-5" src={CSS} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-10 d-block w-100 mr-5" src={HTML} alt="item" />
        </div>
        <div className='home-skills-bar-items-container-2 py-3 d-flex justify-content-center align-items-center'>
          <img className="home-skillsbar-item home-skills home-skills-1 w-100 mr-5" src={JS} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-2 d-block w-100 mr-5" src={REACT} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-3 d-block w-100 mr-5" src={NODE} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-4 d-block w-100 mr-5" src={PYTHON} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-5 d-block w-100 mr-5" src={DJANGO} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-6 d-block w-100 mr-5" src={GIT} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-7 d-block w-100 mr-5" src={BOOTSTRAP} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-8 d-block w-100 mr-5" src={SASS} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-9 d-block w-100 mr-5" src={CSS} alt="item" />
          <img className="home-skillsbar-item home-skills home-skills-10 d-block w-100 mr-5" src={HTML} alt="item" />
        </div>
        <a name='about-me'></a>
      </div>

      {/**
        *ABOUT ME SECTION 
        */}
      <div>
        {
          (language === 'en') ?
            <div className='flex flex-col w-screen items-center py-5 bg-gray-800 justify-center'>
              <h3 className='justify-self-center'>ABOUT ME</h3>
              <div className='flex pt-4 w-3/4'>
                <div className="mx-5">
                  <div className='flex flex-col lg:flex-row gap-2'>
                    <div className='w-2/3'>
                      <p className='text-justify'>My name is Claret Devigne and I am a Full Stack developer with experience in: HTML5, CSS3, Tailwind, Javascript, Python, React, Django, Express, React Native, Electron, Node, Git, Github.</p>
                      <ul>
                        <li>Frontend: HTML 5, CSS 3, Tailwind.</li>
                        <li>Programming Languages as Javascript and learning Python and C#</li>
                        <li>Frameworks like React JS, Express JS, React Native and Electron</li>
                        <li>Git Control Version and Github repositories</li>
                        <li>Databases as SQLite, MySQL, MongoDB, Firebase.</li>
                      </ul>
                      <p>I am certified in some of them by Open-Bootcamp.</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <img className="w-full h-auto" src={FOTO} alt="foto" />
                    </div>
                  </div>
                  <br></br>
                  <p className='text-justify'>
                    I love web application development, from design to implementation. I use the latest technologies and methodologies to provide customized and scalable solutions for each of my clients. My English is at an intermediate level, and I also speak basic conversational French, which allows me to effectively communicate with clients from different countries. In addition, I have skills in graphic design and communication, which help me understand my clients' needs effectively and provide them with solutions focused on their business.
                  </p>
                  <br></br>
                  <p className='text-justify'>
                    I am passionate about development and I am constantly updating myself on the latest trends and technologies to ensure that I offer the best service. That's why I am currently expanding my knowledge through full stack courses on Academlo.
                  </p>
                  <br></br>
                  <p className='text-justify'>
                    With me, you can be sure that your project will be in good hands. My skills and abilities allow me to deliver high-quality projects in short timelines. If you are looking for a reliable and dedicated Full Stack developer, do not hesitate to contact me.
                  </p>
                  <br></br>
                  <h5>Together we can grow your business!</h5>
                </div>
              </div>
            </div>
            :
            <div className='home-aboutme-container d-flex flex-column align-items-center py-4'>
              <div className='d-flex'>
                <h3 className='justify-self-center'>SOBRE MI</h3>
              </div>
              <div className='home-aboutme-content d-flex mt-4'>
                <div className="home-aboutme-content-texts col ml-5">
                  <p className='text-justify'>
                    Mi nombre es Claret Devigne y soy programador Full Stack con amplia experiencia en HTML5, CSS3, Tailwind, Javascript, Python, React, Express, React Native, Electron, Node, Git, Github.
                  </p>
                  <ul>
                    <li>Frontend: HTML 5, CSS 3, Tailwind.</li>
                    <li>Lenguajes de programación como Javascript y aprendiendo Python y C#</li>
                    <li>Frameworks como React JS, Express JS, React Native y Electron</li>
                    <li>Control de versiones con GIT y repositorios en Github</li>
                    <li>Manejo y creación de bases de datos con SQLite, MySQL, MongoDB y Firebase.</li>
                  </ul>
                  <p>Estoy certificado en algunas de ellas por Open-Bootcamp.</p>
                  <br></br>
                  <p className='text-justify'>
                    Me encanta el desarrollo de aplicaciones web, desde el diseño hasta la implementación. Utilizo las últimas tecnologías y metodologías para ofrecer soluciones personalizadas y escalables para cada uno de mis clientes. Mi manejo del idioma inglés es de nivel intermedio-avanzado, también hablo francés a nivel básico conversacional, lo que me permite comunicarme de manera efectiva con clientes de diferentes países. Además, tengo habilidades en diseño gráfico y en comunicación, lo que me ayuda a entender las necesidades de mis clientes de manera efectiva y brindarles soluciones enfocadas en su negocio.
                  </p>
                  <br></br>
                  <p className='text-justify'>
                    Me apasiona el desarrollo y estoy constantemente actualizándome en las últimas tendencias y tecnologías para asegurarme de ofrecer el mejor servicio, por eso me encuentro actualmente expandiendo mis conocimientos a través de cursos Full Stack en Academlo.
                  </p>
                  <br></br>
                  <p className='text-justify'>
                    Conmigo, puedes estar seguro de que tu proyecto estará en buenas manos. Mi habilidades y capacidades me permiten entregar proyectos de alta calidad en plazos cortos. Si estás buscando un programador Full Stack confiable y dedicado, no dudes en ponerte en contacto conmigo.
                  </p>
                  <br></br>
                  <h5>¡Juntos podemos hacer crecer tu negocio!</h5>
                </div>
                <div className="col d-flex justify-content-center">
                  <img className='home-aboutme-picture' src={FOTO} alt="foto" />
                </div>
              </div>
            </div>
        }

      </div>

      {/**
         * CERTIFICATES SECTION
         */}
      <a name='certificates'></a>
      <div className='home-certificates-container d-flex flex-column justify-content-center align-items-center py-5'>
        {
          (language === 'ENGLISH') ?
            <h3>CERTIFICATES</h3>
            :
            <h3>CERTIFICADOS</h3>
        }
        <div className='home-certificates-container-sm d-flex vw-100 justify-content-center align-items-center mt-5'>
          <div className='home-certificates-card rounded border p-5 mr-5'>
            <img className='home-certificates-card-body' src={HTMLCSSC} alt="certificate" onClick={() => { window.open('https://community.open-bootcamp.com/user/claretdevigne/certificaciones/02d4f900-c4d2-40b7-bc0d-a15cd96cb46e', '_blank') }} />
          </div>
          <div className='home-certificates-card rounded border p-5 mr-5'>
            <img className='home-certificates-card-body' src={JAVASCRIPTC} alt="certificate" />
          </div>
          <div className='home-certificates-card rounded border p-5' onClick={() => { window.open('https://community.open-bootcamp.com/user/claretdevigne/certificaciones/1aebdf42-3455-44be-b51e-01da779570f6', '_blank') }}>
            <img className='home-certificates-card-body' src={REACTC} alt="certificate" />
          </div>
        </div>
        <div className='home-certificates-container-sm d-flex align-items-start vw-100 pt-5 justify-content-center align-items-center'>
          <div className='home-certificates-card rounded border p-5 mr-5' onClick={() => { window.open('https://community.open-bootcamp.com/user/claretdevigne/certificaciones/416e5490-7555-4d39-907d-99f7b7e2d19d', '_blank') }}>
            <img className='home-certificates-card-body' src={PYTHONC} alt="certificate" />
          </div>
          <div className='home-certificates-card rounded border p-5 mr-5' onClick={() => { window.open('https://courses.cognitiveclass.ai/certificates/541ad40492cf408fb2379ad3043f4422', '_blank') }}>
            <img className='home-certificates-card-body' src={DS101C} alt="certificate" />
          </div>
          <div className='home-certificates-card rounded border p-5' onClick={() => { window.open('https://www.credly.com/badges/97da350b-61e2-4daf-851d-3b4cdca3b201', '_blank') }}>
            <img className='home-certificates-card-body' src={DSBADGE} alt="certificate" />
          </div>
        </div>
      </div>

      {/**
         * PROJECTS SECTION
         */}
      <a name='projects'></a>
      <div className='home-projects-container d-flex flex-column justify-content-center p-5'>
        <div className='d-flex justify-content-center mb-5'>
          {
            (language === 'ENGLISH') ?
              <h3>PROJECTS</h3>
              :
              <h3>PROYECTOS</h3>
          }
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          <div className='project-item mr-4 mb-4 rounded pointer'>
            <a href='https://countryquiz-claretdevigne.netlify.app/'><img src={QUIZ_PROJECT} alt="project" /></a>
            <div className='mt-2 text-center'>Country Quiz App</div>
            <p className='text-center' style={{ maxWidth: '300px' }}>Selecction Multiple Game, creting with React. The data is obtained from the API https://restcountries.com/v3.1/all</p>
          </div>
          <div className='project-item mr-4 mb-4 pointer rounded'>
            <a href="https://windbnb-claretdevigne.netlify.app/"><img src={WINDBNB_PROJECT} alt="project" /></a>
            <div className='mt-2 text-center'>Windbnb</div>
            <p className='text-center' style={{ maxWidth: '300px' }}>Small version of Airbnb created using React</p>
          </div>
          <div className='project-item rounded mb-4 pointer'>
            <a href='https://todo-angular-claretdevigne.netlify.app/'><img style={{ width: "300px" }} src={TODO_APP} alt="project" /></a>
            <div className='mt-2 text-center'>TODO App</div>
            <div className='text-center' style={{ maxWidth: '300px' }}>TODO created using Angular framework.</div>
          </div>
          <div className='project-item rounded mr-4 mb-4 pointer'>
            <a href='https://random-quote-claretdevigne.netlify.app/'><img style={{ width: "300px" }} src={RANDOM_APP} alt="project" /></a>
            <div className='mt-2 text-center'>Random Quote</div>
            <div className='text-center' style={{ maxWidth: '300px' }}>App created in React, the data comes from an API thru a JSON file.</div>
          </div>
          <div className='project-item rounded mr-4 mb-4 pointer'>
            <a href='https://weather-app-claretdevigne.netlify.app/'><img style={{ width: "300px" }} src={WEATHER_APP} alt="project" /></a>
            <div className='mt-2 text-center'>Weather APP</div>
            <div className='text-center' style={{ maxWidth: '300px' }}>Weather app with the data from the API of Open-meteo</div>
          </div>
          <div className='project-item rounded mb-4 pointer'>
            <a href='https://button-components-claretdevigne.netlify.app/'><img src={INPUT_PROJECT} alt="project" /></a>
            <div className='mt-2 text-center'>Input Components</div>
            <div className='text-center' style={{ maxWidth: '300px' }}>List of reusable components made with React and Bootstrap</div>
          </div>
        </div>
      </div>
      <a name='contact'></a>

      {/**
         * CONTACT SECTION
         */}
      <div className='home-contact-container d-flex flex-column px-5'>
        {
          (language === 'ENGLISH') ?
            <div>
              <h3 className='d-flex justify-content-center mt-5'>CONTACT</h3>
              <form action="https://formsubmit.co/e4fc1798c452f96dec5d754f8ce95853" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.document.URL} />
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-5'>
                  <div className='col-2'>NAME</div>
                  <div className='col-8'>
                    <input name='name' className='home-contact-input' type='text' placeholder='PLEASE ENTER YOUR NAME' required='true'></input>
                  </div>
                  <div className='col-2'>*REQUIRED</div>
                </div>
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-4'>
                  <div className='col-2'>EMAIL</div>
                  <div className='col-8'>
                    <input name='email' className='home-contact-input' type='email' placeholder='PLEASE ENTER YOUR EMAIL' required='true'></input>
                  </div>
                  <div className='col-2'>*REQUIRED</div>
                </div>
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-4'>
                  <div className='col-2'>PHONE</div>
                  <div className='col-8'>
                    <input name='telephone' className='home-contact-input' type='tel' placeholder='WOULD YOU LIKE TO ADD YOUR PHONE NUMBER?'></input>
                  </div>
                  <div className='col-2'>OPTIONAL</div>
                </div>
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-4'>
                  <div className='col-2'>SUBJECT</div>
                  <div className='col-8'>
                    <input name='subject' className='home-contact-input' type='text' placeholder='PLEASE ENTER YOUR SUBJECT' required='true'></input>
                  </div>
                  <div className='col-2'>*REQUIRED</div>
                </div>
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-4'>
                  <div className='col-2'>MESSAGE</div>
                  <div className='col-8'>
                    <input name='message' className='home-contact-input' type='text' placeholder='PLEASE ENTER YOUR MESSAGE' required='true'></input>
                  </div>
                  <div className='col-2'>*REQUIRED</div>
                </div>
                <button type='submit' className='home-contact-submit-btn border rounded-pill mt-4 mb-5 d-flex justify-content-center align-items-center'>
                  <h1>CLICK TO SEND YOUR MESSAGE</h1>
                </button>
              </form>
            </div>

            :

            <div>
              <h3 className='d-flex justify-content-center mt-5'>CONTACTO</h3>
              <form action="https://formsubmit.co/e4fc1798c452f96dec5d754f8ce95853" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.document.URL} />
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-5'>
                  <div className='col-2'>NOMBRE</div>
                  <div className='col-8'>
                    <input name='name' className='home-contact-input' type='text' placeholder='POR FAVOR INGRESA TU NOMBRE' required='true'></input>
                  </div>
                  <div className='col-2'>*REQUERIDO</div>
                </div>
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-4'>
                  <div className='col-2'>EMAIL</div>
                  <div className='col-8'>
                    <input name='email' className='home-contact-input' type='email' placeholder='POR FAVOR INGRESA TU EMAIL' required='true'></input>
                  </div>
                  <div className='col-2'>*REQUERIDO</div>
                </div>
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-4'>
                  <div className='col-2'>TELÉFONO</div>
                  <div className='col-8'>
                    <input name='telephone' className='home-contact-input' type='tel' placeholder='¿TE GUSTARÍA QUE TE CONTACTEMOS POR TELÉFONO?'></input>
                  </div>
                  <div className='col-2'>OPCIONAL</div>
                </div>
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-4'>
                  <div className='col-2'>ASUNTO</div>
                  <div className='col-8'>
                    <input name='subject' className='home-contact-input' type='text' placeholder='POR FAVOR INGRESA EL ASUNTO DEL MENSAJE' required='true'></input>
                  </div>
                  <div className='col-2'>*REQUERIDO</div>
                </div>
                <div className='home-contact-input-container d-flex py-2 border-bottom mt-4'>
                  <div className='col-2'>MENSAJE</div>
                  <div className='col-8'>
                    <input name='message' className='home-contact-input' type='text' placeholder='POR FAVOR INGRESA TU MENSAJE' required='true'></input>
                  </div>
                  <div className='col-2'>*REQUERIDO</div>
                </div>
                <button type='submit' className='home-contact-submit-btn border rounded-pill mt-4 mb-5 d-flex justify-content-center align-items-center'>
                  <h1>CLICK PARA ENVIAR TU MENSAJE</h1>
                </button>
              </form>
            </div>
        }
      </div>

      {/**
         * YOUTUBE SECTION
         */}
      <div className='home-youtube-container p-5 d-flex justify-content-center'>
        <a name='youtube'></a>
        <img className='home-youtube-intro' src={YOUTUBE} alt="youtube channel" />
      </div>

      {/**
         * FOOTER
         */}
      <div className='home-footer-container d-flex px-5 py-3 justify-content-between'>
        <div className='home-footer-container-item col'>Version 1.0</div>
        <div className='home-footer-container-item col text-center'>CLARET DEVIGNE - COPYRIGHT 2023</div>
        <div className='home-footer-container-social-container col d-flex justify-content-end'>
          <a href='https://www.linkedin.com/in/claret-devigne-479529109' target='_blank'><img className='home-footer-social-item mr-2' src={LINKEDIN} alt="Linkedin" /></a>
          <a href='https://github.com/claretdevigne' target='_blank'><img className='home-footer-social-item mr-2' src={GITHUB} alt="Github" /></a>
          <a href='https://www.youtube.com/channel/UCv8NaQ_EDQmMZPNZjN4yS8Q' target='_blank'><img className='home-footer-social-item mr-2' src={YOUTUBE_ICO} alt="Youtube" /></a>
          <a href='https://www.instagram.com' target='_blank'><img className='home-footer-social-item mr-2' src={INSTAGRAM} alt="Instagram" /></a>
          <a href='https://www.facebook.com' target='_blank'><img className='home-footer-social-item mr-2' src={FACEBOOK} alt="Facebook" /></a>
          <a href='mailto:claretdevigne@gmail.com' target='_blank'><img className='home-footer-social-item mr-2' src={EMAIL} alt="Email" /></a>
          <a href='https://wa.link/xe78em' target='_blank'><img className='home-footer-social-item mr-2' src={TELEPHONE} alt="Telephone" /></a>
        </div>
      </div>
    </div>
  )
}
