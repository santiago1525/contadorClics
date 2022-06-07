import './Home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/Button';
import { BsMouse } from 'react-icons/bs';

function Home() {

   let toogle = () => {
        let element = document.querySelector('.hover-show');
        if(element.classList.contains('active')) {
          element.classList.remove('active')
        }
        else {
          element.classList.add('active')
        }
   } 

  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show active' onClick={toogle}>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <h2 id='about'>
        <span>Sobre Mi</span> <br />
        <p>
          Diseñador web en constante aprendizaje, con experiencia en la creación de paginas web con lenguajes como HTML y CSS, también he realizado proyectos de paginas web con conexión a base de datos creadas con MYSQL o Firebase, algunas administradas por medio de phpMyAdmin y desarrolladas con PHP, JAVASCRIPT y frameworks de CSS llamados Materialize o Boostrap para un diseño completamente responsivo. <br /> <br />
          Experiencia en la creación de aplicaciones no code totalmente funcionales tanto para IOS como para ANDROID en plataformas como Glide, Adalo y FlutterFlow. <br /> <br />
          Conocimiento nivel avanzado en excel. <br /> <br />
          Conocimiento en otros lenguajes como C++.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}



export default Home;
