import React from 'react'

export const NavigationBar = () => {
    return (
        <div>
            <div className>
                    <div id="loader" className="loader_class"><img src={require('../../dist/img/loader.gif')} alt="Loader" /></div>
                    <div id="fade" />
                    <div className="container-fluid csnav">
                        <div className="top">
                            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                                <div className="container">
                                    <a className="navbar-brand js-scroll-trigger" href="/#/index.html"><img src="dist/img/logo.svg" style={{ height: 50 }} alt="Logo" /></a>
                                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarResponsive">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item custom-button">
                                                <div className="loginbxo cursorpointer" id="cursorpointer" onclick="location.href ='jobs.html'" style={{ backgroundColor: 'white', color: '#3B3B3B', border: '2px solid #212529', fontWeight: 300 }}>
                                                    Jobs</div>
                                            </li>
                                            <li className="nav-item" id="custom-button">
                                                <div className="loginbxo cursorpointer" id="cursorpointer" onclick="location.href ='social.html'" style={{ backgroundColor: 'white', color: '#3B3B3B', border: '2px solid #212529', fontWeight: 300 }}>Get Social</div>
                                            </li>
                                            <li className="nav-item" id="custom-button">
                                                <div className="loginbxo cursorpointer default" id="cursorpointer" onclick="location.href ='login-user.html'" style={{ backgroundColor: 'white', color: '#3B3B3B', border: '2px solid #212529', fontWeight: 300 }}>
                                                    Sign in
                                                </div>
                                            </li>
                                            <li className="nav-item d-lg-none" style={{ listStyleType: 'none' }}>
                                                <ul className="menuList">
                                                    <li> <a className href="/#/index.html"> Home</a></li>
                                                    <li> <a className href="/#/about_us.html">About InstaDriver</a></li>
                                                    <li> <a className href="/#/verified_search.html">Verified Search (For Employers &amp; Drivers)</a>
                                                    </li>
                                                    <li> <a className href="/#/top_ad_features.html">Top Ad Feature (For Drivers)</a></li>
                                                    <li> <a className href="/#/faq.html">FAQs</a></li>
                                                    <li> <a className href="/#/contact_us.html">Contact Us</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <div className="dropdown mt-2 d-none d-sm-none d-lg-block">
                                                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Menu&nbsp;&nbsp;<img src="dist/img/menu.svg" alt="Menu" />
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="/#/index.html"> Home</a>
                                                        <a className="dropdown-item" href="/#/about_us.html">About InstaDriver</a>
                                                        <a className="dropdown-item" href="/#/verified_search.html">Verified Search (For Employers &amp;Drivers)</a>
                                                        <a className="dropdown-item" href="/#/top_ad_features.html">Top Ad Feature (For Drivers)</a>
                                                        {/*                                            <a class="dropdown-item" href="/#/fake_url">Po Pro le (For Drivers)</a>*/}
                                                        <a className="dropdown-item" href="/#/faq.html">FAQs</a>
                                                        <a className="dropdown-item" href="/#/contact_us.html">Contact Us</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="container-fluid cs-top">
                        <div className="row">
                            <div className="col-lg-12 blkstrip">
                                <div className="container">
                                    <div className="fr">
                                        <img src="dist/img/message.svg" alt="Message" /><a className="call" href="/#/mailto:saysomething@instadriver.co">&nbsp;&nbsp;saysomething@instadriver.co</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content">
                        <header className="masthead" style={{ backgroundImage: 'url("dist/images/uploads/banner/resize/BANNER_1556199205.png")' }}>
                            <div className="container">
                                <div className="col-lg-5 intro-text">
                                    <div className="blackbox">
                                        <div className="intro-lead-in">Find and Hire A Driver. Its Free <br />and No Login Requirement</div>
                                        <div className="padding50">
                                            <input type="hidden" id="verified_cnt" name="verified_cnt" />
                                            <form method="get" id="frmSearch" name="frmSearch" action="https://www.instadriver.co/driver/search">
                                                <div className="select">
                                                    <select id="cid" name="cid">
                                                        <option value>Select Category</option>
                                                        <option value={1}>Personal Driver</option>
                                                        <option value={2}>Public Commuter Driver (e.g. Bus, Ambulance)</option>
                                                        <option value={3}>Ride-Sharing Driver e.g Uber, Taxify</option>
                                                        <option value={4}>School Bus Driver</option>
                                                        <option value={5}>Truck Driver</option>
                                                        <option value={6}>Forklift Driver</option>
                                                        <option value={7}>On-Demand Driver</option>
                                                    </select>
                                                    <div className="select__arrow" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control select" id="loc" name="loc" defaultValue />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" id="basic-addon2">
                                                            <svg className="feather feather-map-pin sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                                <circle cx={12} cy={10} r={3} />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="select">
                                                    <select id="sty" name="sty" onchange="get_search_message(cid.value, sty.value, loc.value, 1);">
                                                        <option value>Select Search Type</option>
                                                        <option value="all">Search All Drivers</option>
                                                        <option value="Y">Search Verified Drivers</option>
                                                    </select>
                                                    <div className="select__arrow" />
                                                </div>
                                                <div id="sr_msg_list" role="alert" />
                                                <div className="row padding12">
                                                    <div className="col-lg-2 col-2">
                                                        <img src="dist/img/filter.svg" data-toggle="modal" data-target="#filterModal" className="cursorpointer" alt="Filter" />
                                                    </div>
                                                    <div className="col-lg-10 col-10">
                                                        <a className="btn btn-primary btn-xl js-scroll-trigger width100" href="/#/go_search(sty.value)"> Search</a>
                                                    </div>
                                                    <div role="alert" id="sr_msg_nolist" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
        </div>
    )
}
