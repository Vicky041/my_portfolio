import React from 'react'
import CV from '../../assets/Victor_Osemeke_Resume_Updated_current1.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA