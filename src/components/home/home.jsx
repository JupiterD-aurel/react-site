import './home.css';
import img from '../props/2H9A019.JPG';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>

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

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>Descendre</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>A Propos de moi</span> <br />
        <p>
          Etudiant en premiere année "Chef de projet digital" a la "Normandie Web School".
 Passioné d'informatique principalement de nouvelle technologie, de manga , d'animé et de Lecture fantasique.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

const toggle = document.querySelector('.main-img');

export default Home;
