import React from 'react';
import { Footer } from '../Footer/Footer'
import { Sports } from '../Sports/Sports'


export const About = () => {
  return (
    <section>
      <section id='about-container'>
        <div id='headshot'></div>
        <h3 className='about-header'>ABOUT</h3>
        <p className='personal'>I am a skillful Software Developer with a persistent craving to learn. From my time as a Developer and Chemist, I have developed a passion for innovation, design, problem solving, and data analytics. My skill set is currently rooted in JavasScript environments, and I am excited to use the fundamentals I have developed to learn new languages and frameworks. I value collaboration, agile processes, and strongly believe vision and purpose are key to one's success.</p>
      </section>
      <section id='about-container'>
        <h3 className='about-header'>STORY</h3>
        <p className='personal'>I am originally from the tri-state area and moved to Colorado for my passion of the outdoors. I have called a car ‘home’ more than once, spent every dime I’ve had doing so, and couldn’t value the memories more. Interests of mine include camping, fishing, travel, photography, and old video games. I have spent many nights rummaging through the sci-fiction/horror movie section of local public libraries in search of the dustiest movie I can find. I enjoy playing a variety of sports and spend the majority of my free time following my favorite New York teams.
        </p>
        <Sports />
        <p className='personal-two'>Throughout my career I have gained experience in constructing equipment, engineering, and problem solving which bleeds into my personal life and has led me to become an avid hobbyist. There is an endless amount of skills I wish to learn, to the extent that my focus can quickly shift from one concept to the next. RIP abandoned ideas! I have found joy in my career as software developer in creating well designed and appealing applications together with, solving the multitude of problems encountered on a daily basis.
        </p>
      </section>
      <Footer />
    </section>
  )
}
