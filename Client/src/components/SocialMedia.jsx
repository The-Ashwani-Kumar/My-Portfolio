import React from 'react';
import {FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.facebook.com/people/Ashwani-Kumar/100009356696714/' rel="noreferrer" target='_blank'>
            <div> <FaFacebook/> </div> 
        </a>
        <a href='https://github.com/The-Ashwani-Kumar/' rel="noreferrer" target='_blank'>
            <div> <FaGithub/> </div> 
        </a>
        <a href='https://www.instagram.com/_the_ashwani_/' rel="noreferrer" target='_blank'>
            <div> <FaInstagram/> </div> 
        </a>
        <a href='https://www.youtube.com/channel/UCtK9EB5kM9Q2F-VkkG4mmBA' rel="noreferrer" target='_blank'>
            <div> <FaYoutube/> </div> 
        </a>
        <a href='https://twitter.com/The_Ashwani_K' rel="noreferrer" target='_blank'>
            <div> <FaTwitter/> </div> 
        </a>
    </div>
  )
}

export default SocialMedia