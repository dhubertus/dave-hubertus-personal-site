import React from 'react'
import { Footer } from '../Footer/Footer'

export const Resume = () => {
  return (
    <section id='resume-container'>
      <article>
        <h3>EXPERIENCE</h3>
        <article>
          <h4>Turing School of Software and Design - Denver, CO</h4>
          <h6>JANUARY 2017 - AUGUST 2017</h6>
          <p>Turing students invest over 1500 hours across seven months in becoming job-ready software developers. In the Front-End Engineering program we begin by building skills in HTML, CSS, and Design Fundamentals. We continue by laying a solid foundation in core JavaScript, then progress into React. In the final quarter, students build backend applications with Node and SQL. In total, FEE graduates have the skills to turn design comps into working applications.</p>
        </article>
        <article>
          <h4>Ciris Energy Inc.   - Centennial, CO</h4>
          <h6>MARCH 2014 - DECEMBER 2016</h6>
          <p>Responsibly transforming carbon-based resources through the integration of science and engineering. R&D through commercialization of a green chemistry process involving the conversion of biomass waste streams into relevant and lucrative chemicals.</p>
        </article>
        <article>
          <h4>Bedoukian Research Inc. - Danbury, CT</h4>
          <h6>SEPTEMBER 2011 - NOVEMBER 2013</h6>
          <p>Large-scale organic synthesis and distillation of fragrances, flavorings, and insect pheromones. Our focus was supplying unique materials while working closely with our customers to meet their requirements, whether related to purity, quantity, delivery time, or shipment method.</p>
        </article>
      </article>
      <article>
        <h3>SKILLS</h3>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React / Redux / Router</li>
          <li>jQuery</li>
          <li>HTML5 Canvas</li>
          <li>TDD</li>
          <li>Design Fundamentals</li>
          <li>Data Analytics</li>
          <li>Multi-Tasking</li>
        </ul>
      </article>
      <article>
        <h3>EDUCATION</h3>
        <article>
          <h4>Keene State College, Keene NH</h4>
          <h5>BS Chemistry / BA Secondary Education</h5>
        </article>
      </article>
      <Footer />
    </section>
  )
}
