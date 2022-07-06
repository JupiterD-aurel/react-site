import React from 'react'
import CV from '../../assets/BOUDOH_Dhan-aurel.pdf'


const CTA = () => {
  return (
	<div className='cta'>
	  <a href={CV} download  className='btn'>Telecharger CV</a>
	  <a href="#contact" className='btn'>Me contacter</a>
	</div>
  )
}

export default CTA
