import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../language/Language';
import { RiGithubLine as Github, RiLinkedinBoxLine as Linkedin, RiWhatsappLine as Whatsapp } from 'react-icons/ri'
import '../styles/Contact.scss';

const Contact = () => {
  const navigate = useNavigate();
  const { dictionary: { contact }, userLanguage } = useLanguage();

  const callApi = async (e) => {
    e.preventDefault();
    const url = 'https://script.google.com/macros/s/AKfycbz8mHvGtDYo_58_r2mWzkhzwTzCR-ZHF2sRgYvR2r3d8U4lKCenQNeTbeQoc0aOydVY/exec';
    const params = e.target;

    const body = {
      name: params[0].value,
      email: params[1].value,
      message: params[2].value,
    }
    const queryString = Object.keys(body).map((query) => (`${query}=${body[query]}&`)).join('');
    const res = await fetch(`${url}?${queryString}`);
    navigate('/thanks');
  }

  return (
    <main className="contact">
      <Helmet>
        <title>{userLanguage === 'en' ?
          'Contact' : 'Contacto'} | Armando Meza
        </title>
        <meta name="description" content={
          userLanguage === 'en' ?
            'Contact Page - Armando Meza' :
            'Página de contacto - Armando Meza'
        } />
      </Helmet>
      <form onSubmit={callApi}>
        <h2>{contact.title}</h2>
        <input type="text" placeholder={contact.name} />
        <input type="text" placeholder={contact.email} />
        <textarea placeholder={contact.message} cols="30" rows="6" required=""></textarea>
        <button type="submit">{contact.submit}</button>
      </form>

      <h3>armandomzlp@gmail.com</h3>

      <div className="socials">
        <a target="_blank" rel="noreferrer" href="https://github.com/amezal">
          <Github size={42} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/armando-meza">
          <Linkedin size={42} />
        </a>
        <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send/?phone=77665604&text&app_absent=0&lang=${userLanguage}`}>
          <Whatsapp size={42} />
        </a>
      </div>
    </main>
  )
}

export default Contact;