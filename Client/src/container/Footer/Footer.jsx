import React, {useState, useEffect} from 'react';
import {AppWrap, MotionWrap} from '../../wrapper';
import {images} from '../../constants';
import {client} from '../../client';
import {FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa';
import './Footer.scss';


const Footer = () => {

  const [formData, setFormData] = useState({name:'', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 500px)").matches
  );

  useEffect(() => {
    window
    .matchMedia("(max-width: 500px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type : 'contact',
      name : name,
      email : email,
      message : message,
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className="head-text">Have Time? Let's Talk</h2>
      {matches &&
      <div style={{display:'flex'}}>
        <a href='https://www.facebook.com/people/Ashwani-Kumar/100009356696714/' rel="noreferrer" target='_blank'>
            <div className='social-icons'> <FaFacebook className='icons-style'/> </div> 
        </a>
        <a href='https://github.com/The-Ashwani-Kumar/' rel="noreferrer" target='_blank'>
            <div className='social-icons'> <FaGithub className='icons-style'/> </div> 
        </a>
        <a href='https://www.instagram.com/_the_ashwani_/' rel="noreferrer" target='_blank'>
            <div className='social-icons'> <FaInstagram className='icons-style'/> </div> 
        </a>
        <a href='https://www.youtube.com/channel/UCtK9EB5kM9Q2F-VkkG4mmBA' rel="noreferrer" target='_blank'>
            <div className='social-icons'> <FaYoutube className='icons-style'/> </div> 
        </a>
        <a href='https://twitter.com/The_Ashwani_K' rel="noreferrer" target='_blank'>
            <div className='social-icons'> <FaTwitter className='icons-style'/> </div> 
        </a>
    </div>
      }
      <div className="app__footer-cards">
        <div className="app__footer-card">
            <img src={images.email} alt="email"/>
            <a href='mailto:ashwanikumar26102001@gmail.com' className='p-text' >ashwanikumar26102001@gmail.com</a>
        </div>
      </div>

      { !isFormSubmitted ?
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className='p-text' type="text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput}/>
            </div>
            <div className="app__flex">
              <input className='p-text' type="email" placeholder="Your email" name="email" value={email} onChange={handleChangeInput}/>
            </div>
            <div>
              <textarea
                className='p-text'
                placeholder='Your message'
                value={message}
                name="message"
                onChange={handleChangeInput} />
            </div>
            <button className="p-text" type='button' onClick={handleSubmit}>{loading?'Sending':'Send Message'}</button>
          </div>
          : 
          <div>
            <h3 className='head-text'>Thank You for getting in touch!</h3>
          </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);