import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const githubSymbol = <FontAwesomeIcon icon={faGithub} size="1x" />
const codepenSymbol = <FontAwesomeIcon icon={faCodepen} size="1x" />
const linkedinSymbol = <FontAwesomeIcon icon={faLinkedin} size="1x" />

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className='columns'>
                    <div className='column is-one-fifth'>
                        <strong className='is-small contact-info'>Email</strong>
                        <p className='contact-info'>hi@nelsonmartins.com</p>
                    </div>
                    <div className="column column-right has-text-right is-hidden-mobile">
                        <div className='content'>
                            <a href='https://github.com/iamnelsonmartins/' target="_blank" rel="noopener noreferrer">{githubSymbol}</a>
                            <a href='https://codepen.io/iamnelsonmartins' target="_blank" rel="noopener noreferrer">{codepenSymbol}
                            </a>
                            <a href='https://www.linkedin.com/in/nelson-martins-9924aa5b' target="_blank" rel="noopener noreferrer">{linkedinSymbol}
                            </a>
                        </div>
                    </div>
                </div>
            </footer >
        )
    }
}

export default Footer