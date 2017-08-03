import React from 'react'
import ResumeImg from '../../images/dave-hubertus-resume-copy.pdf'

export const DownloadResume = ({ toggleModal }) => {
  return(
    <section className='project-details resume-modal'>
      <button
        className='home-button'
        onClick={ () => toggleModal() }>
        X
      </button>
      <iframe
        src={ ResumeImg }
        title="Dave Hubertus Resume"
        height="620" width="100%"
        frameBorder="0"
        scrolling="auto" target="Message">
      </iframe>
    </section>
  )
}
