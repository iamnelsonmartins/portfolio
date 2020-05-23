import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const githubSymbol = <FontAwesomeIcon icon={faGithub} size='2x' />
const codepenSymbol = <FontAwesomeIcon icon={faCodepen} size='2x' />
const linkedinSymbol = <FontAwesomeIcon icon={faLinkedin} size='2x' />

function Content() {
    return (
        <section className='section' id='content'>
            <section className='hero'>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='title_index'>Nelson Martins, frontend developer and jedi apprentice.</h1>
                        <h2 className='subtitle'>living day by day, bit by bit</h2>
                    </div>
                </div>
            </section>

            <div className='columns'>
                <div className='column is-one-fifth is-hidden-mobile'></div>
                <div className='column is-one-fifth'>
                    <div className='social has-text-centered'>
                        <div className='social_logo'>
                            <a href='https://github.com/iamnelsonmartins/' target='_blank' rel='noopener noreferrer'>{githubSymbol}
                                <p className='social_title'>github</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='column is-one-fifth'>
                    <div className='social has-text-centered'>
                        <div className='social_logo'>
                            <a href='https://codepen.io/iamnelsonmartins' target='_blank' rel='noopener noreferrer'>{codepenSymbol}
                                <p className='social_title'>codepen</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='column is-one-fifth'>
                    <div className='social has-text-centered'>
                        <div className='social_logo'>
                            <a href='https://www.linkedin.com/in/nelson-martins-9924aa5b' target='_blank' rel='noopener noreferrer'>{linkedinSymbol}
                                <p className='social_title'>Linkedin</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='column is-one-fifth is-hidden-mobile'></div>
            </div>
        </section>
    )
}

export default Content