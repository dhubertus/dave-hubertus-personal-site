import React from 'react'
import { Footer } from '../Footer/Footer'

export const Portfolio = () => {
  return (
    <section id='portfolio-container'>
      <section id='portfolio-card-container'>
        <h3 id='portfolio-title'>PORTFOLIO</h3>
        <article className='project-card'>
          <h4>UFO Sightings</h4>
          <p>Ac aliquam sit aliquam, nulla quis sociosqu in dolor, arcu habitant, est venenatis at fermentum lacinia donec et, convallis at tortor. Bibendum risus lorem ut metus, leo consectetuer justo cursus egestas, vitae dignissim posuere vel, ornare luctus. Lectus nibh cillum lectus pretium tellus, mollis nibh urna debitis. Arcu sapien in sed dolor, et sit praesent nisl class libero, phasellus amet aliquam sit mi pretium pellentesque. Mattis neque diam viverra iaculis, in lectus erat velit proin suspendisse, beatae enim luctus, sodales a gravida ut pellentesque lorem.</p>
          <div className='anchor-holder'>
            <a className='try-it-anchor'>Try It Yourself</a>
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
            <a className='try-it-anchor'>Try It Yourself</a>
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
