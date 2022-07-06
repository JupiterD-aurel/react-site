import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"

const Services = () =>{
	return (
		<section id='services'>
			<h5>Experience</h5>
			<h2>Experiences professionnelles</h2>

			<div className='container services__container'>
			<article className='service'>
				<div className="service__head">
					<h3>28 Mars / 17 Juin 2022: Stage Developpeur web - Ubinaire,
Le Havre, FRANCE</h3>
				</div>

				<ul className='service__list'>
					<li>
						<BiCheck className='service__list-icon'/>
						<p>Création de site Web Wordpress</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Utilisation React Js, Javascript, PHP, Mysql</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Realisation de projet intern (En Methode agile)</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Creation de contenu web</p>
					</li>

				</ul>

			</article>

			<article className='service'>
				<div className="service__head">
					<h3>Juillet 2021 / En cours : Restos du coeur / Saint Hillaire
Bénévole, Responsable Informatique, Rouen, FRANCE</h3>
				</div>

				<ul className='service__list'>
					<li>
						<BiCheck className='service__list-icon'/>
						<p>Installations systèmes d’exploitations</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Réparation et entretien du matériel informatique</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Gestion de base de données</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Formations utilisateurs</p>
					</li>

				</ul>

			</article>

		<article className='service'>
				<div className="service__head">
					<h3>Avril / Juin 2021: Consultant Stagiaire, MadHouse
consulting, Rouen, FRANCE</h3>
				</div>

				<ul className='service__list'>
					<li>
						<BiCheck className='service__list-icon'/>
						<p>Modélisation de données SAP HANA,SAP BO</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Conseil SI (Système d’Information)</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Gestion de base de données</p>
					</li>

					<li>
						<BiCheck className='service__list-icon'/>
						<p>Realisation de projet intern (En Methode agile)</p>
					</li>

				</ul>

		</article>

			</div>
		</section>
)

}

export default Services