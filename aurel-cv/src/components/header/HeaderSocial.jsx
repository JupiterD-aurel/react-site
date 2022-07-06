import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { TiSocialGithub } from 'react-icons/ti'
import {BsLinkedin} from 'react-icons/bs'
function HeaderSocial() {
  return (
	<div className='header__social'>
	  <a href="https://www.linkedin.com/in/dhan-aurel-boudoh-3709b9203/" target="_blank"><BsLinkedin/></a>
	  <a href="https://github.com/JupiterD-aurel" target="_blank"><TiSocialGithub/></a>
	  <a href="https://www.instagram.com/jupiter_aurel_/?hl=fr" target="_blank"><BsInstagram/></a>
	</div>
  )
}

export default HeaderSocial
