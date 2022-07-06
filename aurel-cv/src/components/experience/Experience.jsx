import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {DiCss3, DiHtml5} from 'react-icons/di'
import {SiJavascript, SiPhp, SiMysql} from 'react-icons/si'
import {FaReact, FaPython, FaNode} from 'react-icons/fa'
const Experience = () =>{
	return (
		<section id='experience'>
			<h5>Mes acquis</h5>
			<h2>Mes Compétences</h2>

			<div className="container experience__container">
				<div className="experience__dev">
					<h3>Dévéloppement</h3>
					<div className="experience__content">

						<article className='experience__details'>
							<DiHtml5 className='experience__details-icon'/>
							<div>
							<h4>HTML</h4>
							<small className='text-light'>Basic</small>			
							</div>
						</article>

						<article className='experience__details'>
							<DiCss3 className='experience__details-icon'/>
							<div>
							<h4>CSS</h4>
							<small className='text-light'>Basic</small>			
							</div>
						</article>

						<article className='experience__details'>
							<SiJavascript className='experience__details-icon'/>
							<div>
							<h4>Javascript</h4>
							<small className='text-light'>Notion</small>			
							</div>
						</article>

						<article className='experience__details'>
							<SiPhp className='experience__details-icon'/>
							<div>
							<h4>PHP</h4>
							<small className='text-light'>Notion</small>			
							</div>
						</article>

						<article className='experience__details'>
							<SiMysql className='experience__details-icon'/>
							<div>
							<h4>MySQL</h4>
							<small className='text-light'>Notion</small>			
							</div>
						</article>

						<article className='experience__details'>
							<FaNode className='experience__details-icon'/>
							<div>
							<h4>NodeJS</h4>
							<small className='text-light'>Notion</small>			
							</div>
						</article>

						<article className='experience__details'>
							<FaReact className='experience__details-icon'/>
							<div>
							<h4>ReactJS</h4>
							<small className='text-light'>Notion</small>			
							</div>
						</article>

						<article className='experience__details'>
							<FaPython className='experience__details-icon'/>
							<div>
							<h4>Python</h4>
							<small className='text-light'>Notion</small>			
							</div>
						</article>
					</div>
				</div>

				<div className="softskill">
					<h3>Soft-skills</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon'/>
							<h4>communication</h4>
						</article>

						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon'/>
							<h4>Quête de savoir</h4>
						</article>

						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon'/>
							<h4>Dynamisme</h4>
						</article>

						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon'/>
							<h4>Autonomie</h4>
						</article>

						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon'/>
							<h4>Curiosité</h4>
						</article>

						<article className='experience__details'>
							<BsPatchCheckFill className='experience__details-icon'/>
							<h4>Persévérance</h4>
						</article>

					</div>
				</div>
			</div>
		</section>
)

}

export default Experience