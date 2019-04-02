import React from 'react';
import './LandingPage.css';
import './rfs.css'
import cdstlockupsecurity from '../assets/cdst-logo-lockup-security-q2.svg';
import securityBannerDesktop from '../assets/security-banner-desktop.jpg';
import sast from '../assets/cybersecurity.jpg';
import caseStudySecurity from '../assets/case-study-security-modernization-th.jpg';
import caseStudyGlobalTelco from '../assets/case-study-global-telco-iam-transformation-th.jpg';
import caseStudyGlobalPharma from '../assets/casestudy-global-pharma-consolidates-security-management-thumbnail-image.jpg';
import caseStudyFinFirm from '../assets/casestudy-financial-firm-increases-iam-security-&-transparency-thumbnail-codex3346.jpg';
import caseStudyCompliance from '../assets/case-study-iam-and-compliance-th.jpg';
import iconCaseStudyRetail from '../assets/icon-caseStudy-retail.svg';
import iconCaseStudyUtilities from '../assets/icon-case-study-utilities.svg';
import iconCaseStudyComm from '../assets/icon-caseStudy-communications.svg';
import iconCaseStudyLifeSciences from '../assets/icon-caseStudy-lifeSciences.svg';


const triggerJob = (job) => {


    fetch('http://18.204.175.170:8080/job/'+ job +'/build', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Basic '+ btoa('admin:e3cb40083b484589a608f472bef1b892')
        }
    })
};


const landingPage = () => {
    return(
        <div>
            <div id="navSubBar" data-sticky-container="" className="navSubBar sticky-container bg-blue"
                 data-atrribute="grayBarTag" style={{height: "75px"}}>

                <div data-sticky="57nsqr-sticky" data-sticky-on="small" data-top-anchor="navSubBar:bottom"
                     data-margin-top="0" data-resize="m6gz0y-sticky" data-events="mutate"
                     className="sticky bg-blue is-anchored is-at-top" data-mutate="m6gz0y-sticky"
                     style={{maxWidth: "1242px", marginTop: "0px", bottom: "auto", top: "0px"}}>

                    <div className="row align-middle">
                        <div className="columns large-9">



                        </div>
                    </div>
                </div>
            </div>
            <div id="mi5hih-interchange"
                 style={{backgroundImage: "url("+ securityBannerDesktop + ")"}}
                 data-magellan-target="" data-bar-offset="125"
                 data-interchange="[/static/media/security-banner-desktop.jpg, small],[../assets/security-banner-desktop.jpg, medium],[../assets/security-banner-desktop.jpg, large]"
                 className="herobanner-new  " data-resize="mi5hih-interchange">

                <div className="banner-mesh">
                    <div className="row py2 medium-py4 large-py7">
                        <div className="columns small-12 medium-4 large-6">


                            <img src={cdstlockupsecurity}
                                 alt="" title="" className="banner-logoLockup small-p1 medium-p2 large-p3"/>


                        </div>
                        <div className="columns small-12 medium-8 large-6 text-white">

                            <p className="bg-green text-white label text-bold medium-mt0 mt1 hide-for-small-only">
                                Protect What Matters Most
                            </p>


                            <h3>MAKING THE DIGITAL WORLD A SAFER PLACE</h3>


                        </div>
                    </div>
                </div>
            </div>
            <div id="navBarInPage" data-sticky-container="" className="align-center sticky-container show-for-large"
                 data-atrribute="bluebar" style={{height: "35px"}}>

                <div data-sticky="i8djxg-sticky" data-sticky-on="small" data-top-anchor="navBarInPage:bottom"
                     data-resize="n9xrwf-sticky" data-margin-top="3.75" data-events="mutate"
                     className="sticky is-anchored is-at-top" data-mutate="n9xrwf-sticky"
                     style={{maxWidth: "1242px", marginTop: "0px", bottom: "auto", top: "0px"}}>

                    <div className="bg-blue show-for-large">
                        <div className="row align-middle">
                            <div className="column">

                                <ul data-magellan="qyqlc1-magellan"
                                    className="vertical medium-horizontal menu small navBarInPage flex-wrap"
                                    data-offset="80" data-attribute="blueBarTag" data-resize="jes2i3-magellan"
                                    data-scroll="jes2i3-magellan" id="jes2i3-magellan" data-events="scroll">


                                    <li><a href="#overview" className="text-white active">Overview</a></li>

                                    <li><a href="#offerings" className="text-white">Solution</a></li>

                                    <li><a href="#featured-work" className="text-white">Digital Security Solutions</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="overview" data-bar-offset="125" data-magellan-target="overview" className="row pt2 px2 pb2"
                 data-attribute="overviewWrapperTag">
                <div className="small-12 medium-6 large-5 columns">
                    <h3 className="text-blue" data-attribute="smartlingGlossaryTitle">SECURITY FOR THE AGE OF DIGITAL
                        EVERYTHING</h3>
                    <hr className="blue"/>


                </div>
                <div className="small-12 medium-6 large-7 columns" data-attribute="overviewElementsDigitalWorld">


                    <h5><span className="text-italic text-blue">Eliminate security blind spots and accelerate innovation, transformation and growth.</span>
                    </h5>
                    <p>Outdated security solutions. Sophisticated cyber-threats. Increasing compliance requirements.
                        Faced with these and other security challenges, today’s companies need a proactive partner who
                        can anticipate and neutralize threats before they materialize.</p>
                    <p>At Cognizant, we approach security as the starting point for delivering the outcomes that leading
                        global organizations demand. Our end-to-end security solutions combine deep domain and industry
                        expertise with a future-focused approach that encompasses advisory, transformation and managed
                        services. We offer the foresight and expertise to solve your most complex challenges.&nbsp;</p>
                    <p>By providing a 360-degree view of your organization’s security ecosystem, Cognizant can identify
                        and eliminate today’s blind spots—while also seeing and solving for the threats ahead—so you can
                        accelerate business innovation, transformation and growth.</p>

                </div>
            </div>
            <input id="paddingValueOverlay" value="" type="hidden"/>
            <div id="offerings" data-magellan-target="" data-bar-offset="125">


                <div className="py3 align-middle  bg-blue" data-atrribute="overviewWrapperTag">
                    <div className="row">
                        <div className="small-12 medium-12 large-12 columns text-center">


                        </div>
                    </div>
                    <div className="row">
                        <div className="small-12 medium-12 large-12 columns text-white"
                             data-atrribute="overviewElementsDigitalWorld">

                            <h5><span className="text-gray-light3">LEAP-LENS - Fast, Affordable, On Demand Application Security Testing Platform for Agile / DevOps World </span></h5>
                            <p>Security teams have a hard time keeping pace with software development in Agile / DevOps environments, and the result of rapidly rolling out software is increased risk. With the majority of cybersecurity attacks focused on applications, automatically detecting vulnerabilities and protecting your applications from attack is critical to your business.</p>
                            <p>Start developing an application security testing strategy to avoid your legacy applications from being attacked by using Cognizant’s LEAP LENS Framework/Platform</p>


                            <a
                               href="#featured-work" onClick="" title="VIEW PDF" className="button small "
                               data-attribute="downloadTheReportClick"><strong> Get started</strong><i
                                className="arrow-right"/></a>
                        </div>
                    </div>
                </div>


            </div>
            <div id="featured-work" className="case-study-tiles pt2" data-magellan-target="featured-work"
                 data-bar-offset="125">


                <h3 className="mb2 text-center">
                    <span className="text-uppercase">Digital Security Solutions</span>
                </h3>


                <div className="row small-up-1 medium-up-2 large-up-3 align-center">

                    <div className="column column-block flex-container">


                        <a onClick={() =>triggerJob("Light-Weight-DAST")} className="flex-container w100">
                            <div
                                style={{background: "url("+ sast +") no-repeat", backgroundSize: "cover"}}
                                className="card gradient-overlay-blue-full bd-blue4 box-shadow-hover">
                                <div className="mbn3 mt1 z1">
                                    <div className="label text-caps"><img
                                        src={iconCaseStudyRetail}
                                        width="20" style={{filter: "invert(1)"}} className="mr-half"/>LW-DAST</div>
                                </div>
                                <div className="card-section pt2 medium-pt5 mt5 text-white z1">
                                    <h5 className="m0 text-normal">Light Weight DAST – Non-Intrusive Scan</h5>
                                </div>
                                <div className="card-divider bg-transparent pt0 text-right z1">
                                    <hr className="mt0 mb1 opacity-50"/>
                                        <div className="row expanded align-right">
                                            <div className="columns flex-container align-right">
                                                <h5 className="anim-icon text-green">
                                                    <i className="arrow-solid-right fw600"/>
                                                    <div className="anim-text">Run</div>
                                                </h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </a>


                    </div>

                    <div className="column column-block flex-container">


                        <a onClick={() =>triggerJob("Light-Weight-SAST")} className="flex-container w100">
                            <div
                                style={{background: "url("+ caseStudySecurity +") no-repeat", backgroundSize: "cover"}}
                                className="card gradient-overlay-blue-full bd-blue4 box-shadow-hover">
                                <div className="mbn3 mt1 z1">
                                    <div className="label text-caps"><img
                                        src={iconCaseStudyUtilities}
                                        width="20" style={{filter: "invert(1)"}} className="mr-half"/>LW-SAST</div>
                                </div>
                                <div className="card-section pt2 medium-pt5 mt5 text-white z1">
                                    <h5 className="m0 text-normal">Light Weight SAST – Non-Services Scan</h5>
                                </div>
                                <div className="card-divider bg-transparent pt0 text-right z1">
                                    <hr className="mt0 mb1 opacity-50"/>
                                        <div className="row expanded align-right">
                                            <div className="columns flex-container align-right">
                                                <h5 className="anim-icon text-green">
                                                    <i className="arrow-solid-right fw600"/>
                                                    <div className="anim-text">Run</div>
                                                </h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </a>


                    </div>

                    <div className="column column-block flex-container">


                        <a onClick={() =>triggerJob("Complete-DAST")} className="flex-container w100">
                            <div
                                style={{background: "url("+ caseStudyGlobalPharma +") no-repeat", backgroundSize: "cover"}}
                                className="card gradient-overlay-blue-full bd-blue4 box-shadow-hover">
                                <div className="mbn3 mt1 z1">
                                    <div className="label text-caps"><img
                                        src={iconCaseStudyLifeSciences}
                                        width="20" style={{filter: "invert(1)"}} className="mr-half"/>C-DAST</div>
                                </div>
                                <div className="card-section pt2 medium-pt5 mt5 text-white z1">
                                    <h5 className="m0 text-normal">Complete DAST</h5>
                                </div>
                                <div className="card-divider bg-transparent pt0 text-right z1">
                                    <hr className="mt0 mb1 opacity-50"/>
                                        <div className="row expanded align-right">
                                            <div className="columns flex-container align-right">
                                                <h5 className="anim-icon text-green">
                                                    <i className="arrow-solid-right fw600"></i>
                                                    <div className="anim-text">Run</div>
                                                </h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </a>


                    </div>

                    <div className="column column-block flex-container">


                        <a onClick={() =>triggerJob("Complete-PipeLine-Scan")} className="flex-container w100">
                            <div
                                style={{background: "url("+ caseStudyGlobalTelco +") no-repeat", backgroundSize: "cover"}}
                                className="card gradient-overlay-blue-full bd-blue4 box-shadow-hover">
                                <div className="mbn3 mt1 z1">
                                    <div className="label text-caps"><img
                                        src={iconCaseStudyComm}
                                        width="20" style={{filter: "invert(1)"}} className="mr-half"/>CPS</div>
                                </div>
                                <div className="card-section pt2 medium-pt5 mt5 text-white z1">
                                    <h5 className="m0 text-normal">Complete PipeLine Scan</h5>
                                </div>
                                <div className="card-divider bg-transparent pt0 text-right z1">
                                    <hr className="mt0 mb1 opacity-50"/>
                                        <div className="row expanded align-right">
                                            <div className="columns flex-container align-right">
                                                <h5 className="anim-icon text-green">
                                                    <i className="arrow-solid-right fw600"/>
                                                    <div className="anim-text">Run</div>
                                                </h5>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </a>


                    </div>

                    <div className="column column-block flex-container">


                        <a onClick={() =>triggerJob("DockerSecurityScan")} className="flex-container w100">
                            <div
                                style={{background: "url("+ caseStudyFinFirm +") no-repeat", backgroundSize: "cover"}}
                                className="card gradient-overlay-blue-full bd-blue4 box-shadow-hover">
                                <div className="mbn3 mt1 z1">
                                    <div className="label text-caps"><img
                                        src={iconCaseStudyLifeSciences}
                                        width="20" style={{filter: "invert(1)"}} className="mr-half"/>DCSS</div>
                                </div>
                                <div className="card-section pt2 medium-pt5 mt5 text-white z1">
                                    <h5 className="m0 text-normal">Docker Container Security Scan</h5>
                                </div>
                                <div className="card-divider bg-transparent pt0 text-right z1">
                                    <hr className="mt0 mb1 opacity-50"/>
                                    <div className="row expanded align-right">
                                        <div className="columns flex-container align-right">
                                            <h5 className="anim-icon text-green">
                                                <i className="arrow-solid-right fw600"></i>
                                                <div className="anim-text">Run</div>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>


                    </div>

                    <div className="column column-block flex-container">


                        <a onClick={() =>triggerJob("SourceCodeScan")} className="flex-container w100">
                            <div
                                style={{background: "url("+ caseStudyCompliance +") no-repeat", backgroundSize: "cover"}}
                                className="card gradient-overlay-blue-full bd-blue4 box-shadow-hover">
                                <div className="mbn3 mt1 z1">
                                    <div className="label text-caps"><img
                                        src={iconCaseStudyComm}
                                        width="20" style={{filter: "invert(1)"}} className="mr-half"/>SCDS</div>
                                </div>
                                <div className="card-section pt2 medium-pt5 mt5 text-white z1">
                                    <h5 className="m0 text-normal">Source Code Dependency Scan</h5>
                                </div>
                                <div className="card-divider bg-transparent pt0 text-right z1">
                                    <hr className="mt0 mb1 opacity-50"/>
                                    <div className="row expanded align-right">
                                        <div className="columns flex-container align-right">
                                            <h5 className="anim-icon text-green">
                                                <i className="arrow-solid-right fw600"/>
                                                <div className="anim-text">Run</div>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>


                    </div>

                </div>



            </div>
        </div>

    )
};

export default landingPage;
