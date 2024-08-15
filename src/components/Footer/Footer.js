import React from 'react'

import './ft.css'

import logo from '../../Images/Logo.jpeg'
import github from '../../Images/Github.png'
import linkedIn from '../../Images/LinkedIn.png'
import youtube from '../../Images/youtube.png'
import tweeter from '../../Images/twitter.png'
import textBox from '../../Images/messagee.png'
import downArrow from '../../Images/downArrow.png'
import { Link } from 'react-router-dom'


function Footer() {
  // This function toggles the content of dropdowns 
  function toggleFirst(id){
    
    if(
      document.getElementById(id).style.display === 'inline-block'){
        document.getElementById(id).style.display = 'none';
      }else{
        document.getElementById(id).style.display = 'inline-block';
      }
  }
  return (
    <>
        {/* The main Footer Body */}
        <div className="footer-body">
            {/* Footers Upper Navbar */}
            <nav className="navbar">  
                <ul>
                    <li><img id='logo' src={logo} alt="" /></li>
                    <li><img src={github} alt="" /></li>
                    <li><img src={youtube} alt="" /></li>
                    <li><img src={tweeter} alt="" /></li>
                    <li><img src={linkedIn} alt="" /></li>
                    <li><img src={textBox} alt="" /></li>
                </ul>
            </nav>

            {/* Holds many options in desktop view */}
            <div className="container fullView">
              <ul>
                <li><h2>Why Simplify</h2></li>
                <li><Link to="/">Customers</Link></li>
                <li><Link to="/">Composable web platform</Link></li>
                <li><Link to="/">Security</Link></li>
                <li><Link to="/">Agency partner program</Link></li>
                <li><Link to="/">Technology partner program</Link></li>
              </ul>
              <ul>
                <li><h2>Products</h2></li>
                <li><Link to="/">Composable web Platform</Link></li>
                <li><Link to="/">Netlify Connect</Link></li>
                <li><Link to="/">Netlify Core</Link></li>
                <li><Link to="/">Netlify Create</Link></li>
                <li><Link to="/">Netlify SDK</Link></li>
                <li><Link to="/">Pricing</Link></li>
                <li><Link to="/">Changelog</Link></li>
                <li><Link to="/">Add-ons +</Link></li>
              </ul>
              <ul>
                <li><h2>Explore</h2></li>
                <li><Link to="/">Docs</Link></li>
                <li><Link to="/">Integration</Link></li>
                <li><Link to="/">Jamstack Book</Link></li>
                <li><Link to="/">Community</Link></li>
                <li><Link to="/">Resources & Guides</Link></li>
                <li><Link to="/">Remotely Interesting</Link></li>
                <li><Link to="/">Technologies +</Link></li>
              </ul>
              <ul>
                <li><h2>Company</h2></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Careers</Link></li>
                <li><Link to="/">Compose Conference</Link></li>
                <li><Link to="/">Press</Link></li>
                <li><Link to="/">Jamstack Fund</Link></li>
                <li><Link to="/">Natlify Store</Link></li>
                <li><Link to="/">Sustainability</Link></li>
              </ul>
              <ul>
                <li><h2>Contact Us</h2></li>
                <li><Link to="/">Sales</Link></li>
                <li><Link to="/">Support</Link></li>
                <li><Link to="/">Status</Link></li>
                <li><Link to="/">Forums</Link></li>
                <li><Link to="/">Hire an Agency</Link></li>
              </ul>
            </div>

            {/* Replaces the container in Mobile view */}
            <div className="drop-container">
              <ul>
                <li onClick={()=>{toggleFirst('first')}}>
                  <div>
                    Why Simplify
                    <img src={downArrow} alt="" />
                  </div>
                  <ul id='first' className='hidden-drop'>
                    <li>Customers</li>
                    <li>Composable Web Platform</li>
                    <li>Security</li>
                    <li>Agency Partner Program</li>
                    <li>Technology Partner Progrm</li>
                  </ul>
                </li>
                <li onClick={()=>{toggleFirst('second')}}><div>
                   Products
                  <img src={downArrow} alt="" />
                </div>
                  <ul id='second' className="hidden-drop">
                    <li>Composable Web Platform</li>
                    <li>Netlify Connect</li>
                    <li>Netlify Core</li>
                    <li>Netlify Create</li>
                    <li>Netlify SDK</li>
                    <li>Pricing</li>
                    <li>changelog</li>
                    <li>Add-ons +</li>
                  </ul>
                </li>
                <li onClick={()=>{toggleFirst('third')}}><div>
                  Explore
                  <img src={downArrow} alt="" />
                </div>
                  <ul id='third' className="hidden-drop">
                    <li>Docs</li>
                    <li>Integration</li>
                    <li>Jamstack Book</li>
                    <li>community</li>
                    <li>Resources & Guides</li>
                    <li>Remotely Interesting</li>
                    <li>Technologies +</li>
                  </ul>
                </li>
                <li onClick={()=>{toggleFirst('fourth')}}><div>
                  Company
                  <img src={downArrow} alt="" />
                </div>
                  <ul id='fourth' className="hidden-drop">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Compose Conference</li>
                    <li>Press</li>
                    <li>Jamstack Fund</li>
                    <li>Netlify Store</li>
                    <li>Sustainability</li>
                  </ul>
                </li>
                <li onClick={()=>{toggleFirst('fifth')}}><div>
                  Contact Us
                  <img src={downArrow} alt="" />
                </div>
                  <ul id='fifth' className="hidden-drop">
                    <li>Sales</li>
                    <li>Support</li>
                    <li>Status</li>
                    <li>Forums</li>
                    <li>Hire an Agency</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="feedback">
              <p>Stay up to date with Simplify news</p>
              <div className="inputContainer">
                <input type="text" />
                <button>Subscribe</button>
              </div>
            </div>

            {/* The last Navbar in Footer */}
            <div className="final">
              <ul>
                <li><Link to="/">Trust Center</Link></li>
                <li><Link to="/">Privacy</Link></li>
                <li><Link to="/">GDPR/CCPA</Link></li>
                <li><Link to="/">Abuse</Link></li>
                <li><Link to="/">Cookie Setting</Link></li>
                <li>@2024 Simplify</li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default Footer
