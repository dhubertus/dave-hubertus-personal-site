import React from 'react';
import { Footer } from '../Footer/Footer'
import { Sports } from '../Sports/Sports'


export const About = () => {
  return (
    <section>
      <section id='about-container'>
        <div id='headshot'></div>
        <h3 id='about-header'>ABOUT</h3>
        <p className='personal'>I am a skillful Software Developer with a persistent craving to learn. From my time as a Developer and Chemist, I have developed a passion for innovation, problem solving, and data analytics. My skill set is currently rooted in JavasScript environments, and I am excited to use the fundamentals I have developed to learn new languages and frameworks. I aspire to join a team that values collaboration, agile processes, and developer growth.</p>
      </section>
      <section id='about-container'>
        <h3 id='about-header'>STORY</h3>
        <p className='personal'>Turkey meatloaf bacon short loin swine jerky. Capicola ham tongue short loin. Fatback filet mignon meatloaf sirloin swine andouille jerky kielbasa chuck turkey porchetta bresaola. Corned beef jerky spare ribs ball tip ground round, capicola tongue rump swine pastrami drumstick pork. Boudin jerky turducken shoulder kevin, pork chop sirloin drumstick cupim prosciutto turkey. Salami ground round turkey corned beef ham fatback.</p>
      </section>
      <Sports />
      <Footer />
    </section>
  )
}
