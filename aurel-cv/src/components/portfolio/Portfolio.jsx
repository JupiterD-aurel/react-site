import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/switch.png'
import IMG2 from '../../assets/gameboy.png'
import IMG3 from '../../assets/techfor.png'
import IMG4 from '../../assets/sportair.png'
import IMG5 from '../../assets/1.png'
import IMG6 from '../../assets/sitecreat.png'

const Portfolio = () =>{
	return (
		<section id='portfolio'>
			<h5>Mon travail récent</h5>
			<h2>Mon portefolio</h2>

			<div className="container portfolio__container">

				<article className='portfolio__item'>
					<div className="portfolio__item-image">
						<img src={IMG1} alt="projet1"/>
					</div>
					<h3>Switch html/css</h3>
					<div className="portfolio__item-cta">
						<a href="https://github.com/JupiterD-aurel/switch-css" className='btn'>Github</a>
						<a href="#" className='btn btn-primary'>version live</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<div className="portfolio__item-image">
						<img src={IMG2} alt="projet1"/>
					</div>
					<h3>gameboy</h3>
					<div className="portfolio__item-cta">
						<a href="https://github.com/JupiterD-aurel/gameboy-html-css" className='btn'>Github</a>
						<a href="#" className='btn btn-primary'>version live</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<div className="portfolio__item-image">
						<img src={IMG3} alt="projet1"/>
					</div>
					<h3>Tech for good/ Hackathon 24/25 juin 2022</h3>
					<div className="portfolio__item-cta">
						<a href="https://github.com/TeoMoca/TechForGood" className='btn'>Github</a>
						<a href="#" className='btn btn-primary'>version live</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<div className="portfolio__item-image">
						<img src={IMG4} alt="projet1"/>
					</div>
					<h3>Sport'Air</h3>
					<div className="portfolio__item-cta">
						<a href="https://github.com/JupiterD-aurel/sport-air" className='btn'>Github</a>
						<a href="#" className='btn btn-primary'>version live</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<div className="portfolio__item-image">
						<img src={IMG5} alt="projet1"/>
					</div>
					<h3>Ubinateur/ calculateur de devis</h3>
					<div className="portfolio__item-cta">
						<a href="https://github.com/JupiterD-aurel/Ubinateur" className='btn'>Github</a>
						<a href="#" className='btn btn-primary'>version live</a>
					</div>
				</article>

				<article className='portfolio__item'>
					<div className="portfolio__item-image">
						<img src={IMG6} alt="projet1"/>
					</div>
					<h3>Ila yoga/ Mon 1er site web</h3>
					<div className="portfolio__item-cta">
						<a href="https://github.com/JupiterD-aurel/Aily-yoga" className='btn'>Github</a>
						<a href="#" className='btn btn-primary'>version live</a>
					</div>
				</article>


			</div>


		</section>
)

}

export default Portfolio