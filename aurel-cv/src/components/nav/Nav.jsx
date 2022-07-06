import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () =>{
	return (
		<nav>
		<a href="#"><AiOutlineHome/><span class="survol">Home</span></a>
		<a href="#about"><AiOutlineUser/><span class="survol">A propos</span></a>
		<a href="#experience"><BiBook/><span class="survol">Experience</span></a>
		<a href="#services"><RiServiceLine/><span class="survol">Services</span></a>
		<a href="#contact"><BiMessageSquareDetail/><span class="survol">Contact</span></a>

		</nav>
)

}

export default Nav