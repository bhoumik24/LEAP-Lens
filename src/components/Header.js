import React from 'react';
import './LandingPage.css';
import countryHomeWorldIcon from "../assets/country-home-world-icon.png";
import COGLogo from '../assets/COG-Logo.svg';
import CBC_navImage from '../assets/CBC_360x100_navIMAGE.jpg';
import COGLogoBusinessWhite from '../assets/COG-Logo-Digital-Business-White.svg';
import COGLogoOperationsWhite from '../assets/COG-Logo-Digital-Operations-White.svg';
import COGLogoTechnologiesWhite from '../assets/COG-Logo-Digital-Systems-Technologies-White.svg';
import GooglePlayLogo from '../assets/9DB3D190FD6DC8155EEDBCDEB4942128BE6B.png';
import AppStoreLogo from '../assets/app-store-logo.png';

const header = () => {
    return (
        <div className="iparys_inherited">
            <div className="bg-gray-light3">
                <div className="row primary-menu ww-menu align-right show-for-large">
                </div>
            </div>
            <div className="header-menu bg-white row align-middle py1">
                <div className="columns large-4 nopadding">
                    <a href="https://www.cognizant.com">
                        <img title="Cognizant Technology Solutions" alt="Cognizant Technology Solutions"
                             className="cog-logo" src={COGLogo}
                             style={{maxWidth:"220px",width:"100%"}}/>
                    </a>
                </div>
                <div className="columns large-8 show-for-large">
                    <ul data-dropdown-menu="h1odd8-dropdown-menu" data-options="disableHover:true;clickOpen:true"
                        className="no-bullet menu horizontal align-right dropdown menu slide-in-right" role="menubar">
                        <li className="tab is-dropdown-submenu-parent opens-left" role="menuitem" aria-haspopup="true"
                            aria-label="Cloud Platform">
                            <a id="Industries" tabIndex="0" className="p1" title="Cloud Platform"
                               data-attribute="topHeaderMenuTag">Cloud Platform</a>
                            <ul className="no-bullet header-submenu submenu is-dropdown-submenu first-sub vertical"
                                style={{display:"none"}} data-submenu="" role="menubar">
                                <li data-attribute="dropDownMenuTag" role="menuitem"
                                    className="is-submenu-item is-dropdown-submenu-item">
                                    <div className="row m0 pt1 text-left  bdb1">
                                        <div className="large-4 columns p-half">
                                            <ul className="no-bullet p-half menu vertical pl0">
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/banking-financial-technology-solutions"
                                                       title="Banking &amp; Financial Services"
                                                       className="p-half">Banking &amp; Financial Services<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/csp-technology-solutions" title="Communications"
                                                       className="p-half">Communications<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/consumer-goods-technology-solutions"
                                                       title="Consumer Goods" className="p-half">Consumer Goods<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/education-technology-solutions" title="Education"
                                                       className="p-half">Education<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/energy-utilities-technology-solutions"
                                                       title="Energy &amp; Utilities"
                                                       className="p-half">Energy &amp; Utilities<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="large-4 columns p-half">
                                            <ul className="no-bullet p-half menu vertical">
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/healthcare-technology-solutions" title="Healthcare"
                                                       className="p-half">Healthcare<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/information-systems-technology-solutions"
                                                       title="Information Services" className="p-half">Information
                                                        Services<i className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/insurance-technology-solutions" title="Insurance"
                                                       className="p-half">Insurance<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/life-sciences-technology-solutions" title="Life Sciences"
                                                       className="p-half">Life Sciences<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/manufacturing-technology-solutions" title="Manufacturing"
                                                       className="p-half">Manufacturing<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="large-4 columns p-half">
                                            <ul className="no-bullet p-half menu vertical">
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/media-entertainment-technology-solutions"
                                                       title="Media &amp; Entertainment"
                                                       className="p-half">Media &amp; Entertainment<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/retail-technology-solutions" title="Retail"
                                                       className="p-half">Retail<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/technology-solutions" title="Technology"
                                                       className="p-half">Technology<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/transportation-logistics-technology-solutions"
                                                       title="Transportation &amp; Logistics"
                                                       className="p-half">Transportation &amp; Logistics<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/travel-hospitality-technology-solutions"
                                                       title="Travel &amp; Hospitality"
                                                       className="p-half">Travel &amp; Hospitality<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row m0 py1">
                                        <div className="columns large-4 collapse">
                                            <img src={CBC_navImage}
                                                 title="COGNIZANT CONSULTING" alt="Megamenu"/>
                                        </div>
                                        <div className="columns large-8">
                                            <h5 className="text-white">COGNIZANT CONSULTING</h5>
                                            <p className="text-white">Helping organizations engage people and uncover
                                                insight from data to shape the products, services and experiences they
                                                offer</p><a href="/consulting" className="p-half mln10 text-bold"
                                                            title="Learn More">Learn More<i
                                            className="arrow-solid-right text-green"/></a></div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="tab is-dropdown-submenu-parent opens-left" role="menuitem" aria-haspopup="true"
                            aria-label="Services">
                            <a id="Services" tabIndex="" className="p1 text-bold" title="Core LEAP"
                               data-attribute="topHeaderMenuTag">Core LEAP</a>
                            <ul className="no-bullet header-submenu submenu is-dropdown-submenu first-sub vertical"
                                style={{display:"none"}} data-submenu="" role="menubar">
                                <li data-attribute="dropDownMenuTag" role="menuitem"
                                    className="is-submenu-item is-dropdown-submenu-item">
                                    <div className="row m0 pt1 text-left bdb1">

                                        <div className="large-4 columns p-half flex-container flex-dir-column">
                                            <div className="card bg-transparent no-border mb0">

                                                <div className="card-section py0">
                                                    <img
                                                        src={COGLogoBusinessWhite}
                                                        className="my1" alt="Megamenu"/>
                                                        <p className="text-white">Working to reshape business models,
                                                            modernize products and enhance customer experiences to drive
                                                            growth.</p>
                                                </div>
                                                <div className="card-divider bg-transparent no-border ">
                                                    <a href="/cognizant-digital-business"
                                                       className="p-half mln10 text-bold" title="Learn More">Learn
                                                        More<i className="arrow-solid-right text-green"/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="large-4 columns p-half flex-container flex-dir-column">
                                            <div className="card bg-transparent no-border mb0">
                                                <div className="card-section py0">
                                                    <img
                                                        src={COGLogoOperationsWhite}
                                                        className="my1" alt="Megamenu"/>
                                                        <p className="text-white">Reinventing and managing your most
                                                            essential business processes with new ways of working.</p>
                                                </div>
                                                <div className="card-divider bg-transparent no-border ">
                                                    <a href="/cognizant-digital-operations"
                                                       className="p-half mln10 text-bold" title="Learn More">Learn
                                                        More<i className="arrow-solid-right text-green"/></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="large-4 columns p-half flex-container flex-dir-column">
                                            <div className="card bg-transparent no-border mb0">
                                                <div className="card-section py0">
                                                    <img
                                                        src={COGLogoTechnologiesWhite}
                                                        className="my1" alt="Megamenu"/>
                                                        <p className="text-white">Simplifying, modernizing and securing
                                                            the IT infrastructure and applications that are the backbone
                                                            of your business.</p>
                                                </div>
                                                <div className="card-divider bg-transparent no-border ">
                                                    <a href="/cognizant-digital-systems-technology"
                                                       className="p-half mln10 text-bold" title="Learn More">Learn
                                                        More<i className="arrow-solid-right text-green"/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row m0 py1">
                                        <div className="columns large-4 collapse">
                                            <img src={CBC_navImage}
                                                 title="" alt="Megamenu"/>
                                        </div>
                                        <div className="columns large-8">
                                            <h5 className="text-white">COGNIZANT CONSULTING</h5>
                                            <p className="text-white">Helping organizations engage people and uncover
                                                insight from data to shape the products, services and experiences they
                                                offer</p><a href="/consulting" className="p-half mln10 text-bold"
                                                            title="Learn More">Learn More<i
                                            className="arrow-solid-right text-green"/></a></div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="tab is-dropdown-submenu-parent opens-left" role="menuitem" aria-haspopup="true"
                            aria-label="Latest Thinking">
                            <a id="Latest_thinking" tabIndex="0" className="p1" title="Carnival Assessment"
                               data-attribute="topHeaderMenuTag">Carnival Assessment</a>
                            <ul className="no-bullet header-submenu submenu is-dropdown-submenu first-sub vertical"
                                style={{display:"none"}} data-submenu="" role="menubar">
                                <li data-attribute="dropDownMenuTag" role="menuitem"
                                    className="is-submenu-item is-dropdown-submenu-item">
                                    <div className="row m0 pt1 text-left  ">
                                        <div className="large-4 columns p-half">
                                            <ul className="no-bullet p-half menu vertical pl0">
                                                <li role="menuitem">
                                                    <h6 className="text-white pl-half">Our Media &amp; Publications</h6>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/latest-thinking" title="All Latest Thinking"
                                                       className="p-half">All Latest Thinking<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/perspectives" title="Perspectives" className="p-half">Perspectives<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/cognizanti" title="Cognizanti Journal" className="p-half">Cognizanti
                                                        Journal<i className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="https://digitally.cognizant.com/"
                                                       title="Digitally Cognizant Blog" target="_blank"
                                                       className="p-half">Digitally Cognizant Blog<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="https://soundcloud.com/cognizant-worldwide/"
                                                       title="Cognizant Podcasts" target="_blank" className="p-half">Cognizant
                                                        Podcasts<i className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/case-studies" title="Browse Case Studies"
                                                       className="p-half">Browse Case Studies<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/infographics" title="Infographics" className="p-half">Infographics<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="large-4 columns p-half">
                                            <ul className="no-bullet p-half menu vertical">
                                                <li role="menuitem">
                                                    <h6 className="text-white pl-half">Key Themes</h6>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/enterprise-blockchain-solutions"
                                                       title="Blockchain Solutions" className="p-half">Blockchain
                                                        Solutions<i className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/blockchain-adoption-primary-research"
                                                       title="Blockchain Primary Research" className="p-half">Blockchain
                                                        Primary Research<i className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/artificial-intelligence-adoption-for-business"
                                                       title="AI Primary Research" className="p-half">AI Primary
                                                        Research<i className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/when-machines-do-everything"
                                                       title="When Machines Do Everything" className="p-half">When
                                                        Machines Do Everything<i
                                                            className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/world-economic-forum-highlights-2019"
                                                       title="World Economic Forum 2019—Davos" className="p-half">World
                                                        Economic Forum 2019—Davos<i
                                                            className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/code-halos" title="Code Halos" className="p-half">Code
                                                        Halos<i className="arrow-solid-right text-green"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="large-4 columns p-half">
                                            <ul className="no-bullet p-half menu vertical">
                                                <li role="menuitem">
                                                    <h6 className="text-white pl-half">Center for the Future of
                                                        Work</h6>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/future-of-work" title="Explore the Future of Work"
                                                       className="p-half">Explore the Future of Work<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/digital-workforce-of-the-future"
                                                       title="Digital Workforce of the Future" className="p-half">Digital
                                                        Workforce of the Future<i
                                                            className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/the-work-ahead" title="The Work Ahead" className="p-half">The
                                                        Work Ahead<i className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/business-value-of-trust" title="Business Value of Trust"
                                                       className="p-half">Business Value of Trust<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="http://www.futureofwork.com/whitepaper/21-jobs-of-the-future-a-guide-to-getting-and-staying-employed-over-the-next-10-years"
                                                       title="21 Jobs of the Future" target="_blank" className="p-half">21
                                                        Jobs of the Future<i
                                                            className="arrow-solid-right text-green"/></a>
                                                </li>
                                                <li className="arrow-end" role="menuitem">
                                                    <a href="/jobs-of-the-future-index" title="Jobs of the Future Index"
                                                       className="p-half">Jobs of the Future Index<i
                                                        className="arrow-solid-right text-green"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="px1 mtn1">
                                        <div
                                            style={{background:"url(../assets/perspectives-app-banner-latest-thinking-apex-logo.png) no-repeat", backgroundSize:"100% 100%", height:"220px"}}
                                            className="row m0 py1 align-right" alt="Megamenu">
                                            <div className="columns large-2 medium-2 small-12 align-self-middle"><a
                                                href="https://itunes.apple.com/us/app/cognizant-perspectives/id439247923?mt=8"
                                                title="Download the iPad app" target="_blank"><img
                                                src={AppStoreLogo}
                                                className="p-half"/></a>
                                                <a href="https://play.google.com/store/apps/details?id=com.cognizanttechnologysolutions.perspectivesapp&amp;hl=en"
                                                   title="Download the Android app" target="_blank"><img
                                                    src={GooglePlayLogo}
                                                    className="p-half"/></a></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="p1 pt-half hide-for-large">
                    <div data-toggle="offCanvasLeft" className="hamburger hide-for-large hamburger--spin-r"
                         aria-expanded="false" aria-controls="offCanvasLeft">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default header;