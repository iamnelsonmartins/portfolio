import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

import Logo from '../images/logo.svg'

const adjustSymbol = <FontAwesomeIcon icon={faAdjust} />

class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.hasDarkMode = this.hasDarkMode.bind(this);
    }

    hasDarkMode() {
        const ls = localStorage.getItem('mode')
        if ((ls === null) || (ls === 'dark')) {
            localStorage.setItem('mode', 'dark')
        } else {
            document.querySelector('body').setAttribute('data-theme', 'light')
        }
    }

    toggleDarkMode() {
        const body = document.querySelector('body')
        this.hasDarkMode();
        localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') !== 'dark' ? body.setAttribute('data-theme', 'light') : body.removeAttribute('data-theme')
    }

    componentDidMount() {
        this.hasDarkMode()
        const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        if (navbarBurgers.length > 0) {
            navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    }

    render() {
        return (
            <>
                <header className="section">
                    <div className="container">
                        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                            <div className="navbar-brand">
                                <Link to='/' className="navbar-item is-hidden-desktop">
                                    <span className="navbar-item-name">
                                        <img src={Logo} alt='logo' />
                                    </span>
                                </Link>
                                <a
                                    className="navbar-burger burger"
                                    aria-label="menu"
                                    aria-expanded="false"
                                    data-target="navigation" href='#'>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                            <div id="navigation" className="navbar-menu">
                                <div className="navbar-start">

                                    <Link to='/' className="navbar-item is-hidden-mobile">
                                        <span className="navbar-item-name">
                                            <img src={Logo} alt='logo' />
                                        </span>
                                    </Link>

                                    <a href='#' onClick={this.toggleDarkMode} className="navbar-item is-hidden-desktop">dark/light mode</a>

                                    <Link to='/projects' className="navbar-item">
                                        <span className="navbar-item-name">Projects</span>
                                    </Link>

                                    <Link to='/about' className="navbar-item">
                                        <span className="navbar-item-name">About</span>
                                    </Link>
                                </div>
                                <div className="navbar-end">
                                    <a href='#' onClick={this.toggleDarkMode} className="navbar-item is-hidden-mobile">
                                        {adjustSymbol}
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header >
            </>
        )
    }
}

export default Nav;