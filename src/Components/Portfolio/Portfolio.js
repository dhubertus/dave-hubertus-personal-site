import React from 'react'
import { Footer } from '../Footer/Footer'

export const Portfolio = () => {
  const alertFunction = () => {
      alert('Sorry! Hosted Site Coming Soon. Please visit the GitHub Repo README.md to learn more about using the site.')
    }

  return (
    <section id='portfolio-container'>
      <section id='portfolio-card-container'>
        <h3 id='portfolio-title'>PORTFOLIO</h3>
        <article className='project-card'>
          <h4>UFO Sightings</h4>
          <p>This project is currently in development although the main funcionality has been completed. When searching for an interesting API that contains lat/long data, I came across plenty of polutant and/or green house gas type API's. Although important, its not the most entertaining data to parse through for weeks. When I came across the UFO Sightings API in an internet thread, I read a few claims and knew I found my data set which proved to be much larger then I could have imagined. I am always thinking of new functionality the user may want when diving into the wild world of UFO sightings. Next steps are to learn/add a form of data visualization (ie. chart.js, d3.js, victory.js) that can provide the user with data trends. Trends, such as, shapes viewed per decade, or number of sightings over time.</p>
          <p id='pitch'>If you're as skeptical as me or even if you believe, you'll enjoy parsing through these claims and wondering, 'What on Earth could they actually have seen?!?'</p>
          <div className='anchor-holder'>
            <a className='try-it-anchor' onClick={() => alertFunction()}><s>Try It Yourself</s></a>
            <a
              className='repository-anchor'
              href='https://github.com/dhubertus/ufo-sighting-google-maps'
              target='_blank'>GitHub Repo</a>
          </div>
          <div id='ufo-img'>
            <p>HOVER</p>
          </div>
        </article>
        <article className='project-card'>
          <h4>Movie Tracker</h4>
          <p>Movie Tracker was a week long project during my third module at Turing School of Software and Design. During this project we worked off The Movie DB API with the idea that the user should be able to create a user-name, sign in as a user, and save favorite movies. With the intention of becoming comfortable using Redux the technologies used to create this app were React.js, React-Redux, Redux-thunk, React-Router 4.0, PostgreSQL, Vanilla JS, JSX and CSS.</p>
          <div className='anchor-holder'>
            <a className='try-it-anchor' onClick={() => alertFunction()}><s>Try It Yourself</s></a>
            <a
              className='repository-anchor'
              href='https://github.com/dhubertus/MovieTracker'
              target='_blank'>GitHub Repo</a>
          </div>
          <div id='movie-tracker-img'>
            <p>HOVER</p>
          </div>
        </article>
        <article className='project-card'>
          <h4>Star Wars API</h4>
          <p>SWAPI was a four day project built with the goal of further developing muscle memory building out React components by leveraging our current understanding of React and adding some more complexity. In this project we utilized The Star Wars API which is heavily nested with additional API calls providing further insight and experience in handling asynchronous JavaScript.</p>
          <div className='anchor-holder'>
            <a
              className='try-it-anchor'
              href='https://swapi-dave-hubertus.herokuapp.com'
              target='_blank'>Try It Yourself</a>
            <a
              className='repository-anchor'
              href='https://github.com/dhubertus/StarWarsAPI'
              target='_blank'>GitHub Repo</a>
          </div>
          <div id='star-wars-img'>
            <p>HOVER</p>
          </div>
        </article>
        <article className='project-card'>
          <h4>CloudKicker</h4>
          <p>CloudKicker was a four day project from my second module at the Turing School of Software and Design. It is the first app I built in React JS as well as my first encounter with handling asynchronous fetch calls. It utilizes Weather Underground’s API to render on demand weather forecasts to a stylish and accessible user interface. In addition to using React JS we also used Enzyme to thoroughly test our application.</p>
          <div className='anchor-holder'>
            <a
              className='try-it-anchor'
              href='https://dhubertus.github.io/CloudKicker'
              target='_blank'>Try It Yourself</a>
            <a
              className='repository-anchor'
              href='https://github.com/dhubertus/CloudKicker'
              target='_blank'>GitHub Repo</a>
          </div>
          <div id='cloud-kicker-img'>
            <p>HOVER</p>
          </div>
        </article>
        <article className='project-card'>
          <h4>Breakout</h4>
          <p>Our version of Breakout was designed to look like and sound like the original atari version from the 70’s. Unfortunately the sound had to be removed for hosting reasons. The goal when building Breakout was to build a game that is playable in the browser using HTML5 Canvas. Additionally we were to use design patterns to drive implementation of code, separate business-logic code from view-related code, and to use TDD while building out the application. The game of choice was to be full-featured and playable with sufficient UX allowing to user to fully interact with the game.</p>
          <div className='anchor-holder'>
            <a
              className='try-it-anchor' href='https://dhubertus.github.io/GameTime-Breakout'
              target='_blank'>Try It Yourself</a>
            <a
              className='repository-anchor'
              href='https://github.com/dhubertus/GameTime-Breakout'
              target='_blank'>GitHub Repo</a>
          </div>
          <div id='breakout-img'>
            <p>HOVER</p>
          </div>
        </article>
      </section>
      <Footer />
    </section>
  )
}
