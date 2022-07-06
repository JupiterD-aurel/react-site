import React from 'react'
import './about.css'
import ME from '../../assets/2H9A0196.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {BsPatchCheckFill} from 'react-icons/bs'


const About = () =>{
	return (
		<section id='about'>
			<h5>Qui suis-je?</h5>
			<h2>A savoir</h2>

			<div className="container about__container">
				<div className="about__moi">
					<div className="about__moi-image">
						<img src={ME} alt="ma photo"/>
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className='about__card'>
							<FaAward className='about__icon'/>
							<h5><em>Technicien en maitenance informatique</em> </h5>
							<small>3 ans d'Experience</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon'/>
							<h5><em>Responsable informatique</em> </h5>
							<small>Restos du coeur st Hilaire(1an)</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon'/>
							<h5><em>Parle Italien</em></h5>
							<small>Niveau intermediare(B2)</small>
						</article>

						<article className='about__card'>
							<BsPatchCheckFill className='about__icon'/>
							<h5><em>Centres d'interets</em></h5>
							<small>Informatique & nouvelles technologies, Cinephile, Voyage, Lecture </small>

						</article>
					</div>

						<p>
						Avec un parcours plutôt atypique de l'économie à technicien en maintenance informatique et avec une passion pour les nouvelles technologies, mon voyage m'a conduit à la “Normandie Web School”. Je suis une formation de “Chef de projet digital” option “Développement web”. Dynamique et motivé, je possède un sens aigu du travail en équipe. J’aime le contact direct avec les clients et sais m’adapter aux exigences professionnelles. Je serais ravi de mettre mon expérience diversifiée dans l’univers de l’informatique à votre disposition pour une alternance en développement web.
						</p>

						<a href="#contact" className='btn btn-primary'>M'écrire</a>

				</div>
			</div>
		</section>
)

}

export default About