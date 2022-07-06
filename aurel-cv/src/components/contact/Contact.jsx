import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () =>{
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xuk9wxx', 'template_qmfehfa', form.current, 'IhblOw6bIjRUO_Sjq')
		e.target.reset()

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

	return (
		<section id='contact'>

			<h2>Me contacter</h2>

			<div className="container contact__container">
				<div className="contact__options">

					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon'/>
						<h4>Email</h4>
						<h5>dhanfranck@gmail.com</h5>
						<a href="mailto:dhanfranck@gmail.com" target="_blank"> Contacter moi </a>
					</article>

					<article className='contact__option'>
						<AiOutlineWhatsApp className='contact__option-icon'/>
						<h4>Whatsapp</h4>
						<h5>+33 6 05 95 28 70</h5>
						<a href="https://web.whatsapp.com" target="_blank"> Contacter moi </a>
					</article>

					<article className='contact__option'>
						<BsLinkedin className='contact__option-icon'/>
						<h4>Linkedin</h4>
						<h5>Dhan-aurel BOUDOH</h5>
						<a href="https://www.linkedin.com/in/dhan-aurel-boudoh-3709b9203/" target="_blank"> Contacter moi </a>
					</article>
				</div>

		<form ref={form} onSubmit={sendEmail}>

                <input type="text" name="nom"  placeholder="@Nom"/>
                <input type="text" name="email"  placeholder="@Email"/>
                <textarea name="message" rows="7" placeholder="Votre message"></textarea>
                <button type='submit' className='btn btn-primary'>Envoyer</button>

		</form>

			</div>

		</section>
)

}

export default Contact