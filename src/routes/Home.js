import React from 'react'
import "./Home.css"
import Sidebar from '../components/Sidebar'
import java from '../images/java.png'
import Html5 from '../images/Html5.png'
import Node from '../images/Node.png'
import CSS3 from '../images/CSS3_logo.svg.png'
import JavaScript from '../images/JavaScript-Symbol.png'
import CC from '../images/C++.png'
import Port from '../images/port.png'
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';





function Home() {
  return (
    <div className='box'>
      <Sidebar/>
      <div className='main'>
        <div class='container'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hi, I'm Erasmus Mensah",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Hi, I'm Erasmus Mensah",
        2000,
        "Hi, I'm Erasmus Mensah",
        3000,
        
      ]}
      wrapper="span"
      speed={50}
      className='type'
      repeat={Infinity}
    />
        
        <div>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Software Engineer ",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Backend Developer",
        2000,
        "FrontEnd Developer",
        3000,
        "MobileApp Developer",
        1000


        
        
      ]}
      wrapper="span"
      speed={10}
      className='type2'
      repeat={Infinity}
    />
    </div>
        <div className='textbox'><p3> 
           I specialize in Java, JavaScript, React, HTML, CSS, React Native, and Node.js.
          Explore my projects to see how I bring ideas to life with clean code and creative solutions. 
          From web development to mobile apps, 
          I'm dedicated to delivering high-quality software that exceeds expectations.</p3>
          </div>
          <div className='bigB'> 
             <button className='button2'>Download Cv</button>
          </div>
        
        <div className='stack'>
          <img src={java} alt='stack' className='java1'/>
          <img src={CSS3} alt='stack' className='java2'/>
          <img src={Html5} alt='stack' className='java4'/>
          <img src={JavaScript} alt='stack' className='java3'/>
          <img src={CC} alt='stack' className='java6'/>
        
          <img src={Node} alt='stack' className='java5'/>
         
         
          
        </div>
         
        </div>
        <motion.div 
        class='photo'
        initial={{opacity:0}}
        animate={{
          opacity: 1,
          transition:{delay:2.4, duration: 8.4,ease:'easeInOut'},
        }}
  
        >
         
          <img className='op' src={Port} alt='photoo'
                />
          </motion.div>
        <motion.svg className='svg'
          viewBox='0 0 506 506'
          fill='transparent'
          > 
          
        <motion.circle className='circle'
            cx='253'
            cy='253'
            r='250'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{strokeDasharray: '24 10 0 0'}}
            stroke='rgb(0, 234, 255)' 
            animate={{
              strokeDasharray:['15 120 25 25', '16,25,92,72', '4,45 22 22'],
              rotate:[120 ,360],
            }} 
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}  > 
      

          </motion.circle>
          
         
          </motion.svg>
         
  
      
        </div>

        <div className='expertise'>
          <div className='about'>
            

          </div>
        </div>
       
    </div>

  
    

  )
}

export default Home