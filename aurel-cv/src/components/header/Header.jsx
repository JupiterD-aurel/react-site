import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/2H9A0194.JPG'
import HeaderSocial from './HeaderSocial'

const Header = () =>{
	return (
		<header>
			<div className='container header__container'>
				<h5>Portfolio</h5>
				<h1>Dhan-aurel</h1>
				<h5 className='text-light'>Developpeur web et mobile</h5>

				<CTA/>
				<HeaderSocial/>
			<div className='moi'>
			<img src={ME} alt="photo de moi"/>
			</div>

			<a href="#contact" className='scroll__down'>Descendre</a>

			</div>

		</header>
)

}

export default Header