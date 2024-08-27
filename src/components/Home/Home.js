import React from 'react'

import './Home.css'

import twilio from '../../Images/twilio.png'
import mattle from '../../Images/mattle.png'
import google from '../../Images/google.png'
import riot from '../../Images/riot.png'
import uniliver from '../../Images/uniliver.png'
import peloton from '../../Images/peloton.png'
import sparkle from '../../Images/sparkle.png'
import store from '../../Images/store.png'
import folder from '../../Images/folder.png'
import edge from '../../Images/edge.png'
import logo from '../../Images/Logo.jpeg'
import check from '../../Images/check.png'
import forarr from '../../Images/forward-arrow.png'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'


function Home() {
    function changeText(text){
        const elem = document.getElementById('changeable');
        elem.innerText = text;
    }
    return (
        <>
            <Navbar />
            <div className="mainContainer">
                {/* The landing view */}
                <div className="backImageHolder">
                    <div className="infoHolder">
                        <h1>Connect everything</h1>
                        <h1>Build anything</h1>
                        <p>Simplify is the essential platform for the delivery of exceptional and dynamic web experiences, without limitations.</p>
                    </div>

                    {/* Holds two buttons */}
                    <div className="buttonHolder">
                        <button className="deploy">Deploy to Simplify</button>
                        <button id="requestDemo">Request demo</button>
                    </div>  

                    {/* Holds the Instructive video */}
                    <div className="videoHolder">
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/6stlCkUDG_s?si=kP02ojvXxiMi9hE1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="infoHolder">
                        <h1 className='font-black'>Simplify Composable Web Platform</h1>
                        <p id='font-black'>Streamlined orchestration, simplified and unified workflows, and real-time updates across infrastructure, workflows, websites and teams — all supported by Enterprise-grade security, services, and a world-class partner ecosystem. </p>
                    </div>
                </div>

                {/* CardHolder holds the informative cards */}
                <div className="cardHolder">

                    <div className="card">
                        <span className='title' id='title-1'>Frontend Cloud</span>
                        <h3>Deploy faster</h3>
                        <p>Simplify Core is a frontend cloud solution for developers to build and deploy future-proof digital solutions with modern, composable tooling that works with all modern frameworks.</p>
                        <Link to="/">Learn More About Core <img src={forarr} alt="" /></Link>
                    </div>
                    <div className="card">
                        <span className='title' id='title-2'>Data Layer</span>
                        <h3>Unify all content</h3>
                        <p>Simplify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source.</p>
                        <Link to="/">Learn More About Connect <img src={forarr} alt="" /></Link>
                    </div>
                    <div className="card">
                        <span className='title' id='title-3'>Visual Editor</span>
                        <h3>Click, edit, publish</h3>
                        <p>Simplify Create gives digital teams the freedom to autonomously perform content and website updates faster than ever before with an intuitive visual editor.</p>
                        <Link to="/">Learn More About Create <img src={forarr} alt="" /></Link>
                    </div>
                </div>
                {/* The explore More button */}
                <Link className='expBtn' to="/">Explore the platform</Link>

                {/* Holds the enterprises associated with */}
                <div className='enterpriseHolder'>
                    <h1 id='mobile-black' className='font-black'>Enterprises running on Simplify</h1>
                    <div className="logo-holder">
                        <img src={twilio} alt="" />
                        <img src={mattle} alt="" />
                        <img src={google} alt="" />
                        <img src={riot} alt="" />
                        <img src={uniliver} alt="" />
                        <img src={peloton} alt="" />
                    </div>
                </div>


                {/* Holds the Advertisement of the same website */}
                <div className="advertise">
                    <div className="centerDiv">
                        <div className="center-div-left">
                            <h2>Ship your</h2>
                            <div className="iterable">
                                <p id='changeable'>E-Commerce Website</p>
                            </div>
                            <h2>in just few clicks</h2>
                            <p>Spin up a new project, or connect an existing, and explore rollbacks, CI/CD, edge functions, collaborative deploy previews, and more.</p>

                            <button className="btnLeft">Read the docs</button>
                            <button className="btnLeft">Developer Hub</button>
                        </div>
                        <div className="center-div-right">
                            <div className="topRight">
                                <ul>
                                    <li id='first' onClick={()=>{changeText('E-Commerce Site')}}><Link to="#ecommerce"><img src={store} alt="" /> <p>E-Commerce Site</p></Link></li>
                                    <li onClick={()=>{changeText('AI Chatbot')}}><Link to="#aibot"><img src={sparkle} alt="" /><p>AI- Bot</p></Link></li>
                                    <li onClick={()=>{changeText('Landing Page')}}><Link to="#loadpage"><img src={folder} alt="" /><p>Landing Page</p></Link></li>
                                    <li onClick={()=>{changeText('Edge function')}}><Link to="#edge"><img src={edge} alt="" /><p>Edge function</p></Link></li>
                                </ul>
                            </div>
                            <div className='contents'>

                                <div id="ecommerce">
                                    <h2>Ecommerce</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspiciatis pariatur reprehenderit consectetur porro doloribus. Ullam vero ea in eum architecto hic quibusdam libero at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspiciatis pariatur reprehenderit consectetur porro doloribus. Ullam vero ea in eum architecto hic quibusdam libero at?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspiciatis pariatur reprehenfdnfklhfkhds;hnsifthish;shfihnsdifvhusiuhnpiderit consectetur porro doloribus. Ullam vero ea in eum architecto hic quibusdam libero at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspiciatis pariatur reprehenderit consectetur porro doloribus. Ullam vero ea in eum architecto hic quibusdam libero at? Odit aperiam eos esse ab non consectetur porro blanditiis vero voluptas nisi alias obcaecati iste nesciunt saepe eum, corporis minima quas perspiciatis? Atque illo fuga eius eligendi quibusdam quisquam quod aliquid quo qui distinctio, doloremque ullam doloribus sed, obcaecati, nisi rem? Magni minima sequi aut dolores id placeat quis cum! Aperiam modi, doloribus exercitationem esse sint perferendis possimus harum accusantium tempore repellendus, voluptatum doloremque! Ipsa quos enim neque optio ipsam ab, aliquam obcaecati.
                                    </p>
                                </div>
                                <hr />
                                <div id="aibot">
                                    <h2>AI-BOT</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspiciatis pariatur reprehenderit consectetur porro doloribus. Ullam vero ea in eum architecto hic quibusdam libero at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspicialigendi quibusdam quisquam quod aliquid quo qui distinctio, doloremque ullam doloribus sed, obcaecati, nisi rem? Magni minima sequi aut dolores id placeat quis cum! Aperiam modi, doloribus exercitationem esse sint perferendis possimus harum accusantium tempore repellendus, voluptatum doloremque! Ipsa quos enim neque optio ipsam ab, aliquam obcaecati.
                                    </p>
                                </div>
                                <hr />
                                <div id="loadpage">
                                    <h2>Loading Page</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspiciatis pariatur reprehenderit consectetur porro doloribus. Ullam vero ea in eum architecto hic quibusdam libero at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspicialigendi quibusdam quisquam quod aliquid quo qui distinctio, doloremque ullam doloribus sed, obcaecati, nisi rem? Magni minima sequi aut dolores id placeat quis cum! Aperiam modi, doloribus exercitationem esse sint perferendis possimus harum accusantium tempore repellendus, voluptatum doloremque! Ipsa quos enim neque optio ipsam ab, aliquam obcaecati.
                                    </p>
                                </div>
                                <hr />
                                <div id="edge">
                                    <h2>Edge Function</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspiciatis pariatur reprehenderit consectetur porro doloribus. Ullam vero ea in eum architecto hic quibusdam libero at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et velit quis perspicialigendi quibusdam quisquam quod aliquid quo qui distinctio, doloremque ullam doloribus sed, obcaecati, nisi rem? Magni minima sequi aut dolores id placeat quis cum! Aperiam modi, doloribus exercitationem esse sint perferendis possimus harum accusantium tempore repellendus, voluptatum doloremque! Ipsa quos enim neque optio ipsam ab, aliquam obcaecati.
                                    </p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="addContainer">
                        <div>
                            <h1>35M+</h1>
                            <p>Websites deployed on Simplify</p>
                        </div>
                        <div>
                            <h1>4M+</h1>
                            <p>Developers</p>
                        </div>
                        <div>
                            <h1>99.99%</h1>
                            <p>Uptime SLA</p>
                        </div>
                    </div>
                </div>

                {/* Hold the customers opinions */}
                <div className="customerStory">
                    <div className="customer-story-left">
                        <div className="customer-story-left-logo">
                            <img src={logo} alt="" />
                            <h1 className='font-black'>Mammut</h1>
                        </div>
                        <div className="customer-story-left-li">
                            <li><img src={check} alt="" /><p>Increase in developer productivityIncrease in site reliability</p></li>
                            <li><img src={check} alt="" /><p>Increase in site reliability</p></li>
                            <li><img src={check} alt="" /><p>Quality on par with extremely high standards</p></li>
                        </div>
                    </div>
                    <div className="customer-story-right">
                        <p id='header'>Customer Story</p>
                        <p id="opinion">Mammut means quality - in brand and in technology</p>
                        <p id="content">Mammut came to Simplify because they needed a performant, interoperable Composable Web Platform that could deliver a best-in-class digital brand experience for their customers. They needed a partner that could keep their site reliable and performant during peak retail season and unexpected traffic spikes.</p>
                        <Link to="/">View the story <img src={forarr} alt="" /></Link>
                    </div>
                </div>
                <h1 className='font-black'>Ready to try Simplify?</h1>
                <button className='expBtn'>Request Demo</button>
            </div>

            {/* End of home */}

            <Footer />
        </>
    )
}

export default Home
