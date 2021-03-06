import React from 'react'
import { Footer } from '../Footer/Footer'

export const Resume = () => {
  return (
    <section>
      <div id='resume-container'>
        <article id='experience-container'>
          <h3 id='experience-title'>EXPERIENCE</h3>
          <article className='experience-card'>
            <h4>Digital Data Services Inc. - Lakewood, CO</h4>
            <h6>SEPTEMBER 2017 - PRESENT</h6>
            <p>Digital Data Services is a consultancy that provides custom, desktop and mobile, geospatial web mapping solutions. Utilizing React, Node, Django, PostgreSQL, and various other languages, libraries, and frameworks, I customize web applications by designing and building out new features to increase functionality and overall ease of use.</p>
          </article>
          <article className='experience-card'>
            <h4>Turing School of Software and Design - Denver, CO</h4>
            <h6>JANUARY 2017 - AUGUST 2017</h6>
            <p>Turing students invest over 1500 hours across seven months in becoming job-ready software developers. In the Front-End Engineering program we begin by building skills in HTML, CSS, and Design Fundamentals. We continue by laying a solid foundation in core JavaScript, then progress into React. In the final quarter, students build backend applications with Node and SQL. In total, FEE graduates have the skills to turn design comps into working applications.</p>
          </article>
          <article className='experience-card'>
            <h4>Ciris Energy Inc.   - Centennial, CO</h4>
            <h6>MARCH 2014 - DECEMBER 2016</h6>
            <p>Responsibly transforming carbon-based resources through the integration of science and engineering. R&D through commercialization of a green chemistry process involving the conversion of biomass waste streams into relevant and lucrative chemicals.</p>
          </article>
          <article className='experience-card'>
            <h4>Bedoukian Research Inc. - Danbury, CT</h4>
            <h6>SEPTEMBER 2011 - NOVEMBER 2013</h6>
            <p>Large-scale organic synthesis and distillation of fragrances, flavorings, and insect pheromones. Our focus was supplying unique materials while working closely with our customers to meet their requirements, whether related to purity, quantity, delivery time, or shipment method.</p>
          </article>
        </article>
        <article id='skills-card'>
          <h3>SKILLS</h3>
          <ul>
            <li>HTML / CSS / Sass</li>
            <li>JavaScript / jQuery / TypeScript</li>
            <li>React / Redux</li>
            <li>Python / Django</li>
            <li>Google Maps / Leaflet / Mapbox</li>
            <li>Node / Express</li>
            <li>SQL / ORMs / Knex / Sequelize</li>
            <li>PostgreSQL / SQLite</li>
            <li>AWS / API Gateway / Lambda / S3 / Beanstalk</li>
            <li>Create & Consume RESTful / SOAP APIs</li>
            <li>Local Storage / Cookies / JSON Web Token</li>
            <li>Web Sockets</li>
            <li>TDD / Mocha / Chai / Enzyme</li>
            <li>Webpack</li>
            <li>Data Analytics / Visualization</li>
            <li>Photoshop / GIMP</li>
            <li>Git / GitHub / CI Front End Build Pipelines</li>
            <li>Design Fundamentals</li>
          </ul>
        </article>
        <article id='education-card'>
          <h3>EDUCATION</h3>
          <article>
            <h4>Keene State College, Keene NH</h4>
            <h5>BS Chemistry / BA Secondary Education</h5>
          </article>
        </article>
      </div>
      <Footer />
    </section>
  )
}
