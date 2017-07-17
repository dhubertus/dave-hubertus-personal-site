import React from 'react'


export const Contact = ({ toggleModal }) => {
  return (
    <section id='contact-container'>
      <section id='contact-method-container'>
        <h3>CONTACT</h3>
          <article className='contact-method'>
            <a className='contact-icon phone'></a>
            <a id='phone'>(203) 241-1899</a>
          </article>
          <article className='contact-method'>
            <a
              className='contact-icon email'
              href='mailto:davehubertus@gmail.com'></a>
            <a
              id='email'
              href='mailto:davehubertus@gmail.com'>davehubertus@gmail.com</a>
          </article>
          <article className='contact-method'>
            <a
              className='contact-icon linkedin' href='https://www.linkedin.com/in/dave-hubertus-04128327/'
              target='_blank'></a>
              <a
                id='linkedin-url'
                href='https://www.linkedin.com/in/dave-hubertus-04128327/'
                target='_blank'>LinkedIn</a>
          </article>
          <article className='contact-method'>
            <a
              className='contact-icon github'
              href='https://github.com/dhubertus'
              target='_blank'></a>
            <a
              id='github-url'
              href='https://github.com/dhubertus'
              target='_blank'>GitHub</a>
          </article>
          <article className='contact-method'>
            <a
              className='contact-icon resume'
              onClick={ () => toggleModal("resume") }>
              </a>
            <article
              id='resume-modal'
              onClick={ () => toggleModal("resume") }>Download Resume
            </article>

          </article>
      </section>
    </section>
  )
}
