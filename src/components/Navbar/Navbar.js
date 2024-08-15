import React from 'react'

import './Nav.css'

import logo from '../../Images/Logo.jpeg'
import downArrow from '../../Images/downArrow.png'
import search from '../../Images/search.png'
import hamburger from '../../Images/hamburger.png'
import close from '../../Images/close.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const toggleSidebar = () => {

    const sideBar = document.getElementById('sidebar');
    if (sideBar.style.display === 'flex') {
      sideBar.style.display = 'none'
    } else {
      sideBar.style.display = 'flex'
    }
  }
  const showSearchBox = () => {
    const searchBox = document.getElementById('searchContainer');
    if (searchBox.style.display === 'none') {
      searchBox.style.display = 'flex';
    } else {
      searchBox.style.display = 'none';
    }
  }
  return (
    <>
      {/* This is the Navbar for Desktop view */}
      <nav className="nav-body fullNav">
        <ul className='nav-left nav'>
          <li className='logoHolder'><img src={logo} alt="" /></li> { /* This is Logo holder*/}
          <li className="nav-left-items"> {/* This specified the left Part of Navbar*/}
            <Link className='anchorTag platformHolder' to="/">Platforms<img src={downArrow} alt="" /></Link>
            <ul className='hiddenNav' id="platform">
              <ul id='hidden-nav-left'> {/* This is the hidden Nav displayed after hovering*/}
                <li>Where to start</li>
                <li><Link to="/">Docs</Link></li>
                <li><Link to="/">Developer Hub</Link></li>
                <li><Link to="/">Templtes</Link></li>
                <li><Link to="/">Composable Commerce 101</Link></li>
                <li><Link to="/">Work with a partner Agency</Link></li>
              </ul>
              <ul id="hidden-nav-right">
                <div className="inner-div-1"><li>Project Kikcstart</li></div>
                <div className='inner-div-2'>
                  <ul className="hidden-nav-right-left">

                    <li><Link to="/">Next.js</Link></li>
                    <li><Link to="/">Gatsby</Link></li>
                    <li><Link to="/">Jamstack</Link></li>
                    <li><Link to="/">Wordpress</Link></li>
                    <li><Link to="/">React</Link></li>
                  </ul>
                  <ul className='hidden-nav-right-left'>
                    <li><Link to="/">Nuxt</Link></li>
                    <li><Link to="/">Vue</Link></li>
                    <li><Link to="/">Sitecore</Link></li>
                    <li><Link to="/">Svelte</Link></li>
                    <li><Link to="/">+More</Link></li>
                  </ul>

                </div>
              </ul>
            </ul>
          </li>
          <li className="nav-left-items"><Link className='anchorTag platformHolder' to="/">Solutions<img src={downArrow} alt="" /></Link>
            <ul className='hiddenNav' id="solutions">
              <ul id='hidden-nav-left'>
                <li>Where to start</li>
                <li><Link to="/">Docs</Link></li>
                <li><Link to="/">Developer Hub</Link></li>
                <li><Link to="/">Templtes</Link></li>
                <li><Link to="/">Composable Commerce 101</Link></li>
                <li><Link to="/">Work with a partner Agency</Link></li>
              </ul>
              <ul id="hidden-nav-right">
                <div className="inner-div-1"><li>Project Kikcstart</li></div>
                <div className='inner-div-2'>
                  <ul className="hidden-nav-right-left">

                    <li><Link to="/">Next.js</Link></li>
                    <li><Link to="/">Gatsby</Link></li>
                    <li><Link to="/">Jamstack</Link></li>
                    <li><Link to="/">Wordpress</Link></li>
                    <li><Link to="/">React</Link></li>
                  </ul>
                  <ul className='hidden-nav-right-left'>
                    <li><Link to="/">Nuxt</Link></li>
                    <li><Link to="/">Vue</Link></li>
                    <li><Link to="/">Sitecore</Link></li>
                    <li><Link to="/">Svelte</Link></li>
                    <li><Link to="/">+More</Link></li>
                  </ul>

                </div>
              </ul>
            </ul>
          </li>
          <li className="nav-left-items"><Link className='anchorTag platformHolder' to="/">Integration</Link> </li>
          <li className="nav-left-items"><Link className='anchorTag platformHolder' to="/"><p>Start Building</p><img src={downArrow} alt="" /></Link>
            <ul className='hiddenNav' id="start-building">
              <ul id='hidden-nav-left'>
                <li>Where to start</li>
                <li><Link to="/">Docs</Link></li>
                <li><Link to="/">Developer Hub</Link></li>
                <li><Link to="/">Templtes</Link></li>
                <li><Link to="/">Composable Commerce 101</Link></li>
                <li><Link to="/">Work with a partner Agency</Link></li>
              </ul>
              <ul id="hidden-nav-right">
                <div className="inner-div-1"><li>Project Kikcstart</li></div>
                <div className='inner-div-2'>
                  <ul className="hidden-nav-right-left">

                    <li><Link to="/">Next.js</Link></li>
                    <li><Link to="/">Gatsby</Link></li>
                    <li><Link to="/">Jamstack</Link></li>
                    <li><Link to="/">Wordpress</Link></li>
                    <li><Link to="/">React</Link></li>
                  </ul>
                  <ul className='hidden-nav-right-left'>
                    <li><Link to="/">Nuxt</Link></li>
                    <li><Link to="/">Vue</Link></li>
                    <li><Link to="/">Sitecore</Link></li>
                    <li><Link to="/">Svelte</Link></li>
                    <li><Link to="/">+More</Link></li>
                  </ul>

                </div>
              </ul>
            </ul>
          </li>
          <li className="nav-left-items"><Link className='anchorTag platformHolder' to="/">Docs</Link>

          </li>
          <li className="nav-left-items"><Link className='anchorTag platformHolder' to="/">Pricing</Link>

          </li>
        </ul>
        <ul className="nav-right nav"> {/* This section contains the right part of Navbar */}
          <li className='nav-right-items'><img onClick={showSearchBox} src={search} alt="" />
            <div id="searchContainer">
                <input type="text" placeholder='Start typing to search' autoFocus />
              <div className="search-container-inner-div">
                <div className="search-container-inner-div-left">
                  <ul>
                    <li><Link to="/">Get started with Simplify CLI</Link></li>
                    <li><Link to="/">Get started with Simplify Connect</Link></li>
                    <li><Link to="/">Optional configuration for functions</Link></li>
                    <li><Link to="/">Integrations overview</Link></li>
                    <li><Link to="/">Access data with Netlify Connect</Link></li>
                    <li><Link to="/">Manage functions with Netlify CLI</Link></li>
                    <li><Link to="/">Netlify Connect overview</Link></li>
                  </ul>
                </div>
                <div className="search-container-inner-div-right">
                  <h2>Talk to an expert</h2>
                  <p>Need help evaluating if Simplify is right for your project? We can help.</p>
                  <button>Request a demo  </button>
                </div>

              </div>
            </div>
          </li>
          <li className='nav-right-items'><Link className='anchorTag' to="/">Contact</Link></li>
          <li className='nav-right-items'><Link className='anchorTag' to="/login">Log-in</Link></li>
          <li className='nav-right-items'><Link id='signInBtn' className='anchorTag' to="/">Sign-up</Link></li>
        </ul>
      </nav>
      {/* Desktop Navbar ends here */}
      {/* This is Navbar for Mobile view */}

      <nav className="nav-body mobileNav">
        <ul className='nav'>
          <li className='logoHolder'><img src={logo} alt="" /></li>
          <li><Link className='anchorTag' to="/"><img src={search} alt="" /></Link></li>
          <li><Link className='anchorTag' to="/login">Log In</Link></li>
          <li><img src={hamburger} onClick={toggleSidebar} className='hamburger' alt="" /></li>
          {/* This is the hidden navbar toggled after clicking Hamburger */}
          <ul id='sidebar'>
            <li><img src={close} onClick={toggleSidebar} alt="" /></li>
            <li onClick={toggleSidebar} >Platform</li>
            <li onClick={toggleSidebar} >Solutions</li>
            <li onClick={toggleSidebar} >Integration</li>
            <li onClick={toggleSidebar} >Start Building</li>
            <li onClick={toggleSidebar} >Docs</li>
            <li onClick={toggleSidebar} >Pricing</li>
            <li onClick={toggleSidebar} >Contact</li>
          </ul>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
