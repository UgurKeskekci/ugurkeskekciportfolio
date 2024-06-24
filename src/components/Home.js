import React from 'react';
import './Home.css';
import dummyProfile from '../assets/images/profilePhoto.jpeg';
import { TbBrandGithub,TbBrandLinkedin  } from "react-icons/tb";

const Home = () => {
  return (
    <header className="home">   
      <div className="hero">
        
       <div className='infoSection'> 
        <h2>Front-End React Developer 👋</h2>
        <p>Hi, I'm Uğur Keşkekçi. A passionate Front-end React Developer based in Turkey. 📍</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/u%C4%9Fur-ke%C5%9Fkekci-3518001a2/"><TbBrandLinkedin />
</a>
          <a href="https://github.com/UgurKeskekci"><TbBrandGithub />
</a>
        </div>
        </div>
        <div className='profilePhoto'> <img src={dummyProfile} alt="Profile" /></div>
       
      </div>
     
      <div className="tech-stack">
      <h3> Tech Stack |</h3>
          <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML5" />
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" />
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" />
          <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript" />
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
          <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" alt="Tailwind CSS" />
          <img src="https://img.icons8.com/color/48/000000/sass.png" alt="Sass" />
        </div>
    </header>
  );
};

export default Home;
