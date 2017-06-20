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
          <p>Ac aliquam sit aliquam, nulla quis sociosqu in dolor, arcu habitant, est venenatis at fermentum lacinia donec et, convallis at tortor. Bibendum risus lorem ut metus, leo consectetuer justo cursus egestas, vitae dignissim posuere vel, ornare luctus. Lectus nibh cillum lectus pretium tellus, mollis nibh urna debitis. Arcu sapien in sed dolor, et sit praesent nisl class libero, phasellus amet aliquam sit mi pretium pellentesque. Mattis neque diam viverra iaculis, in lectus erat velit proin suspendisse, beatae enim luctus, sodales a gravida ut pellentesque lorem.</p>
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
          <p>Ac aliquam sit aliquam, nulla quis sociosqu in dolor, arcu habitant, est venenatis at fermentum lacinia donec et, convallis at tortor. Bibendum risus lorem ut metus, leo consectetuer justo cursus egestas, vitae dignissim posuere vel, ornare luctus. Lectus nibh cillum lectus pretium tellus, mollis nibh urna debitis. Arcu sapien in sed dolor, et sit praesent nisl class libero, phasellus amet aliquam sit mi pretium pellentesque. Mattis neque diam viverra iaculis, in lectus erat velit proin suspendisse, beatae enim luctus, sodales a gravida ut pellentesque lorem.</p>
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
          <p>Ac aliquam sit aliquam, nulla quis sociosqu in dolor, arcu habitant, est venenatis at fermentum lacinia donec et, convallis at tortor. Bibendum risus lorem ut metus, leo consectetuer justo cursus egestas, vitae dignissim posuere vel, ornare luctus. Lectus nibh cillum lectus pretium tellus, mollis nibh urna debitis. Arcu sapien in sed dolor, et sit praesent nisl class libero, phasellus amet aliquam sit mi pretium pellentesque. Mattis neque diam viverra iaculis, in lectus erat velit proin suspendisse, beatae enim luctus, sodales a gravida ut pellentesque lorem.</p>
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
          <p>Ac aliquam sit aliquam, nulla quis sociosqu in dolor, arcu habitant, est venenatis at fermentum lacinia donec et, convallis at tortor. Bibendum risus lorem ut metus, leo consectetuer justo cursus egestas, vitae dignissim posuere vel, ornare luctus. Lectus nibh cillum lectus pretium tellus, mollis nibh urna debitis. Arcu sapien in sed dolor, et sit praesent nisl class libero, phasellus amet aliquam sit mi pretium pellentesque. Mattis neque diam viverra iaculis, in lectus erat velit proin suspendisse, beatae enim luctus, sodales a gravida ut pellentesque lorem.</p>
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
