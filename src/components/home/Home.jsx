import React from 'react';
import '../../styles/style.css';
import JS from '../../media/javascript.png';
import REACT from '../../media/react.png';
import NODE from '../../media/node.png';
import PYTHON from '../../media/python.png';
import DJANGO from '../../media/django.png';
import GIT from '../../media/git.png';
import CSS from '../../media/css.png';
import HTML from '../../media/html.png';
import WORLD from '../../media/world.gif';
import FOTO from '../../media/foto.jpeg';
import DS101C from '../../media/certificates/ds101-c.png';
import HTMLCSSC from '../../media/certificates/html-css-c.png';
import JAVASCRIPTC from '../../media/certificates/javascript-c.png';
import PYTHONC from '../../media/certificates/python-c.png';
import REACTC from '../../media/certificates/react-js-c.png';
import DSBADGE from '../../media/certificates/dsbadge.png';
import YOUTUBE from '../../media/youtube.gif';
import LINKEDIN from '../../media/social/in.png';
import GITHUB from '../../media/social/github.png';
import YOUTUBE_ICO from '../../media/social/youtube.png';
import INSTAGRAM from '../../media/social/instagram.png';
import FACEBOOK from '../../media/social/facebook.png';
import EMAIL from '../../media/social/email.png';
import TELEPHONE from '../../media/social/tel.png';
import CVFITFINDER from "../../media/projects/cvfitfinder.png";
import INPUT_PROJECT from '../../media/projects/input.gif';
import WINDBNB_PROJECT from '../../media/projects/windbnb.gif';
import QUIZ_PROJECT from '../../media/projects/country-quiz.gif';
import TODO_APP from '../../media/projects/todo.gif';
import WEATHER_APP from '../../media/projects/weather-app.gif';
import RANDOM_APP from '../../media/projects/random-quote.gif';
import { useSelector } from 'react-redux';

export default function Home() {
  const language = useSelector((state) => state.settings.language);
  const content = {
    presentation: {
      en: {
        a: "I'm Claret Devigne",
        b: "Welcome to my world!",
        c: "Full Stack Developer (Frontend y Backend). My focus is on efficiency, quality and attention to detail. I am open to new challenges and continuous learning in my career.",
        d: "Contact me",
      },
      es: {
        a: "Soy Claret Devigne",
        b: "¡Bienvenido a mi mundo!",
        c: "Desarrollador Full Stack (Frontend y Backend). Mi foco es la eficiencia, la calidad y el detalle en atención. Estoy abierto a nuevos desafíos y aprendizaje continuo en mi carrera.",
        d: "Contáctame",
      },
    },
  };

  return (
    <div className="min-h-screen text-white bg-gray-900">
      {/* HOME SECTION */}
      <a name="home" />
      <div className="pt-20 h-screen flex flex-col md:flex-row bg-black">
        <div className="flex justify-center items-center md:w-7/12">
          
          <img
            draggable="false"
            className="w-full max-w-md h-auto select-none"
            src={WORLD}
            alt="space"
          />
          {/* Cambio: max-w-md limita el tamaño, h-auto mantiene el ratio */}
        </div>
        <div className="flex flex-col justify-center items-center md:w-5/12 p-6 text-center">
          {/* Cambio: md:w-5/12, p-6 y text-center para mejor presentación */}
          <h1 className="text-4xl font-bold animate-pulse">
            {content.presentation[language].a}
          </h1>
          <h2 className="text-2xl mt-2">{content.presentation[language].b}</h2>
          <h5 className="text-lg mt-4">{content.presentation[language].c}</h5>
          <a
            href="#contact"
            className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
          >
            {content.presentation[language].d}
          </a>
        </div>
      </div>

      {/* SKILLS ANIMATED BAR SECTION */}
      <div className="py-6 flex justify-center items-center bg-gray-900">
        <div className="flex overflow-hidden space-x-6">
          {/* Cambio: Un solo contenedor con space-x-6 para espaciado */}
          {[JS, REACT, NODE, PYTHON, DJANGO, GIT, CSS, HTML].map((skill, index) => (
            <img
              key={index}
              draggable="false"
              className="w-20 h-auto select-none"
              src={skill}
              alt="skill"
            />
            
          ))}
        </div>
        <a name="about-me" />
      </div>

      {/* ABOUT ME SECTION */}
      <div className="py-10 bg-gray-800 flex flex-col items-center">
        <h3 className="text-3xl font-semibold">
          {language === "en" ? "ABOUT ME" : "SOBRE MI"}
        </h3>
        <div className="flex flex-col lg:flex-row w-11/12 mt-6 gap-6">
          <div className="lg:w-2/3 space-y-4">
            <p className="text-justify">
              {language === "en"
                ? "My name is Claret Devigne and I am a Full Stack developer with experience in: HTML5, CSS3, Tailwind, Javascript, Python, React, Django, Express, React Native, Electron, Node, Git, Github."
                : "Mi nombre es Claret Devigne y soy programador Full Stack con amplia experiencia en HTML5, CSS3, Tailwind, Javascript, Python, React, Express, React Native, Electron, Node, Git, Github."}
            </p>
            <ul className="list-disc pl-5">
              <li>Frontend: HTML 5, CSS 3, Tailwind.</li>
              <li>
                {language === "en"
                  ? "Programming Languages as Javascript and learning Python and C#"
                  : "Lenguajes de programación como Javascript y aprendiendo Python y C#"}
              </li>
              <li>Frameworks como React JS, Express JS, React Native y Electron</li>
              <li>
                {language === "en"
                  ? "Git Control Version and Github repositories"
                  : "Control de versiones con GIT y repositorios en Github"}
              </li>
              <li>Databases as SQLite, MySQL, MongoDB, Firebase.</li>
            </ul>
            <p>
              {language === "en"
                ? "I am certified in some of them by Open-Bootcamp."
                : "Estoy certificado en algunas de ellas por Open-Bootcamp."}
            </p>
            <p className="text-justify">
              {language === "en"
                ? "I love web application development, from design to implementation. I use the latest technologies and methodologies to provide customized and scalable solutions for each of my clients. My English is at an intermediate level, and I also speak basic conversational French, which allows me to effectively communicate with clients from different countries."
                : "Me encanta el desarrollo de aplicaciones web, desde el diseño hasta la implementación. Utilizo las últimas tecnologías y metodologías para ofrecer soluciones personalizadas y escalables para cada uno de mis clientes. Mi manejo del idioma inglés es de nivel intermedio-avanzado, también hablo francés a nivel básico conversacional, lo que me permite comunicarme de manera efectiva con clientes de diferentes países."}
            </p>
            <p className="text-justify">
              {language === "en"
                ? "I am passionate about development and I am constantly updating myself on the latest trends and technologies to ensure that I offer the best service. That's why I am currently expanding my knowledge through full stack courses on Academlo."
                : "Me apasiona el desarrollo y estoy constantemente actualizándome en las últimas tendencias y tecnologías para asegurarme de ofrecer el mejor servicio, por eso me encuentro actualmente expandiendo mis conocimientos a través de cursos Full Stack en Academlo."}
            </p>
            <p className="text-justify">
              {language === "en"
                ? "With me, you can be sure that your project will be in good hands. My skills and abilities allow me to deliver high-quality projects in short timelines. If you are looking for a reliable and dedicated Full Stack developer, do not hesitate to contact me."
                : "Conmigo, puedes estar seguro de que tu proyecto estará en buenas manos. Mis habilidades y capacidades me permiten entregar proyectos de alta calidad en plazos cortos. Si estás buscando un programador Full Stack confiable y dedicado, no dudes en ponerte en contacto conmigo."}
            </p>
            <h5 className="text-xl">
              {language === "en"
                ? "Together we can grow your business!"
                : "¡Juntos podemos hacer crecer tu negocio!"}
            </h5>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <img
              draggable="false"
              className="w-full h-auto select-none rounded-lg"
              src={FOTO}
              alt="foto"
            />
            {/* Cambio: w-full h-auto para mantener ratio */}
          </div>
        </div>
      </div>

      {/* CERTIFICATES SECTION */}
      <a name="certificates" />
      <div className="py-10 flex flex-col items-center bg-gray-900">
        <h3 className="text-3xl font-semibold">
          {language === "en" ? "CERTIFICATES" : "CERTIFICADOS"}
        </h3>
        <div className="flex flex-wrap justify-center mt-6 gap-6 w-11/12">
          {/* Cambio: flex-wrap y gap-6 para responsividad */}
          {[
            { src: HTMLCSSC, link: "https://community.open-bootcamp.com/user/claretdevigne/certificaciones/02d4f900-c4d2-40b7-bc0d-a15cd96cb46e" },
            { src: JAVASCRIPTC },
            { src: REACTC, link: "https://community.open-bootcamp.com/user/claretdevigne/certificaciones/1aebdf42-3455-44be-b51e-01da779570f6" },
            { src: PYTHONC, link: "https://community.open-bootcamp.com/user/claretdevigne/certificaciones/416e5490-7555-4d39-907d-99f7b7e2d19d" },
            { src: DS101C, link: "https://courses.cognitiveclass.ai/certificates/541ad40492cf408fb2379ad3043f4422" },
            { src: DSBADGE, link: "https://www.credly.com/badges/97da350b-61e2-4daf-851d-3b4cdca3b201" },
          ].map((cert, index) => (
            <div
              key={index}
              className="p-5 border rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={cert.link ? () => window.open(cert.link, "_blank") : undefined}
            >
              <img
                draggable="false"
                className="w-full h-auto select-none"
                src={cert.src}
                alt="certificate"
              />
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <a name="projects" />
      <div className="py-10 flex flex-col items-center bg-gray-800">
        <h3 className="text-3xl font-semibold">
          {language === "en" ? "PROJECTS" : "PROYECTOS"}
        </h3>
        <div className="flex flex-wrap justify-center mt-6 gap-6 w-11/12">
          {[
            {
              src: CVFITFINDER, link: "https://cvfitfinder.com",
              title: "CV Fit Finder",
              desc: "Tool that helps recruiter to find the best candidates trhu the CV and a "
            },
            { src: QUIZ_PROJECT, link: "https://countryquiz-claretdevigne.netlify.app/", title: "Country Quiz App", desc: "Selecction Multiple Game, creting with React. The data is obtained from the API https://restcountries.com/v3.1/all" },
            { src: WINDBNB_PROJECT, link: "https://windbnb-claretdevigne.netlify.app/", title: "Windbnb", desc: "Small version of Airbnb created using React" },
            
            
            
          ].map((project, index) => (
            <div key={index} className="w-80 flex flex-col items-center text-center">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  draggable="false"
                  className="w-full h-auto select-none rounded-lg hover:opacity-80 transition"
                  src={project.src}
                  alt="project"
                />
              </a>
              <div className="mt-2 text-lg font-medium">{project.title}</div>
              <p className="text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <a name="contact" />
      <div className="py-10 flex flex-col items-center bg-gray-900 px-6">
        <h3 className="text-3xl font-semibold">
          {language === "en" ? "CONTACT" : "CONTACTO"}
        </h3>
        <form
          action="https://formsubmit.co/e4fc1798c452f96dec5d754f8ce95853"
          method="POST"
          className="w-full max-w-2xl mt-6 space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.document.URL} />
          {[
            { label: language === "en" ? "NAME" : "NOMBRE", name: "name", type: "text", placeholder: language === "en" ? "PLEASE ENTER YOUR NAME" : "POR FAVOR INGRESA TU NOMBRE", required: true },
            { label: language === "en" ? "EMAIL" : "EMAIL", name: "email", type: "email", placeholder: language === "en" ? "PLEASE ENTER YOUR EMAIL" : "POR FAVOR INGRESA TU EMAIL", required: true },
            { label: language === "en" ? "PHONE" : "TELÉFONO", name: "telephone", type: "tel", placeholder: language === "en" ? "WOULD YOU LIKE TO ADD YOUR PHONE NUMBER?" : "¿TE GUSTARÍA QUE TE CONTACTEMOS POR TELÉFONO?" },
            { label: language === "en" ? "SUBJECT" : "ASUNTO", name: "subject", type: "text", placeholder: language === "en" ? "PLEASE ENTER YOUR SUBJECT" : "POR FAVOR INGRESA EL ASUNTO DEL MENSAJE", required: true },
            { label: language === "en" ? "MESSAGE" : "MENSAJE", name: "message", type: "text", placeholder: language === "en" ? "PLEASE ENTER YOUR MESSAGE" : "POR FAVOR INGRESA TU MENSAJE", required: true },
          ].map((field, index) => (
            <div key={index} className="flex items-center border-b py-2">
              <label className="w-1/4 text-sm font-medium">{field.label}</label>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className="w-2/4 p-2 bg-transparent border-none focus:outline-none text-white"
              />
              <span className="w-1/4 text-xs">
                {field.required ? "*REQUIRED" : "OPTIONAL"}
              </span>
            </div>
          ))}
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition w-full"
          >
            <h1 className="text-xl">
              {language === "en" ? "CLICK TO SEND YOUR MESSAGE" : "CLICK PARA ENVIAR TU MENSAJE"}
            </h1>
          </button>
        </form>
      </div>

      {/* YOUTUBE SECTION */}
      <div className="py-10 flex justify-center bg-gray-800">
        <a name="youtube" />
        <img
          draggable="false"
          className="w-full max-w-2xl h-auto select-none"
          src={YOUTUBE}
          alt="youtube channel"
        />
      </div>

      {/* FOOTER */}
      <div className="py-4 px-6 flex flex-col md:flex-row justify-between items-center bg-gray-900">
        <div className="text-sm">Version 2.0</div>
        <div className="text-sm my-2 md:my-0">CLARET DEVIGNE</div>
        <div className="flex space-x-4">
          {[
            { src: LINKEDIN, link: "https://www.linkedin.com/in/claret-devigne-479529109" },
            { src: GITHUB, link: "https://github.com/claretdevigne" },
            { src: YOUTUBE_ICO, link: "https://www.youtube.com/channel/UCv8NaQ_EDQmMZPNZjN4yS8Q" },
            { src: INSTAGRAM, link: "https://www.instagram.com" },
            { src: FACEBOOK, link: "https://www.facebook.com" },
            { src: EMAIL, link: "mailto:claretdevigne@gmail.com" },
            { src: TELEPHONE, link: "https://wa.link/xe78em" },
          ].map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <img
                draggable="false"
                className="w-6 h-auto select-none hover:opacity-80 transition"
                src={social.src}
                alt="social"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}