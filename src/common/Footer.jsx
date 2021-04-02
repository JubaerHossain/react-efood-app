// @flow 
import * as React from 'react';

export const Footer = () => {
    return (
        <>
           <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
                <div className="row">
                <div className="col selected">
                    <a href="home.html" className="text-danger small font-weight-bold text-decoration-none">
                    <p className="h4 m-0"><i className="feather-home text-danger" /></p>
                    Home
                    </a>
                </div>
                <div className="col">
                    <a href="most_popular.html" className="text-dark small font-weight-bold text-decoration-none">
                    <p className="h4 m-0"><i className="feather-map-pin" /></p>
                    Trending
                    </a>
                </div>
                <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
                    <div className="bg-danger rounded-circle mt-n0 shadow">
                    <a href="checkout.html" className="text-white small font-weight-bold text-decoration-none">
                        <i className="feather-shopping-cart" />
                    </a>
                    </div>
                </div>
                <div className="col">
                    <a href="favorites.html" className="text-dark small font-weight-bold text-decoration-none">
                    <p className="h4 m-0"><i className="feather-heart" /></p>
                    Favorites
                    </a>
                </div>
                <div className="col">
                    <a href="profile.html" className="text-dark small font-weight-bold text-decoration-none">
                    <p className="h4 m-0"><i className="feather-user" /></p>
                    Profile
                    </a>
                </div>
                </div>
            </div>
            <footer className="section-footer border-top bg-dark">
                <div className="container">
                <section className="footer-top padding-y py-5">
                    <div className="row">
                    <aside className="col-md-4 footer-about">
                        <article className="d-flex pb-3">
                        <div><img alt="#" src="../../../public/assets/img/logo_web.png" className="logo-footer mr-3" /></div>
                        <div>
                            <h6 className="title text-white">About Us</h6>
                            <p className="text-muted">Some short text about company like You might remember the Dell computer commercials in which a youth reports.</p>
                            <div className="d-flex align-items-center">
                            <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Facebook" target="_blank" href="#"><i className="feather-facebook" /></a>
                            <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Instagram" target="_blank" href="#"><i className="feather-instagram" /></a>
                            <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Youtube" target="_blank" href="#"><i className="feather-youtube" /></a>
                            <a className="btn btn-icon btn-outline-light mr-1 btn-sm" title="Twitter" target="_blank" href="#"><i className="feather-twitter" /></a>
                            </div>
                        </div>
                        </article>
                    </aside>
                    <aside className="col-sm-3 col-md-2 text-white">
                        <h6 className="title">Error Pages</h6>
                        <ul className="list-unstyled hov_footer">
                        <li><a href="not-found.html" className="text-muted">Not found</a></li>
                        <li><a href="maintence.html" className="text-muted">Maintence</a></li>
                        <li><a href="coming-soon.html" className="text-muted">Coming Soon</a></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-3 col-md-2 text-white">
                        <h6 className="title">Services</h6>
                        <ul className="list-unstyled hov_footer">
                        <li><a href="faq.html" className="text-muted">Delivery Support</a></li>
                        <li><a href="contact-us.html" className="text-muted">Contact Us</a></li>
                        <li><a href="terms.html" className="text-muted">Terms of use</a></li>
                        <li><a href="privacy.html" className="text-muted">Privacy policy</a></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-3 col-md-2 text-white">
                        <h6 className="title">For users</h6>
                        <ul className="list-unstyled hov_footer">
                        <li><a href="login.html" className="text-muted"> User Login </a></li>
                        <li><a href="signup.html" className="text-muted"> User register </a></li>
                        <li><a href="forgot_password.html" className="text-muted"> Forgot Password </a></li>
                        <li><a href="profile.html" className="text-muted"> Account Setting </a></li>
                        </ul>
                    </aside>
                    <aside className="col-sm-3 col-md-2 text-white">
                        <h6 className="title">More Pages</h6>
                        <ul className="list-unstyled hov_footer">
                        <li><a href="trending.html" className="text-muted"> Trending </a></li>
                        <li><a href="most_popular.html" className="text-muted"> Most popular </a></li>
                        <li><a href="restaurant.html" className="text-muted"> Restaurant Details </a></li>
                        <li><a href="favorites.html" className="text-muted"> Favorites </a></li>
                        </ul>
                    </aside>
                    </div>
                </section>
                </div>
                <section className="footer-copyright border-top py-3 bg-light">
                <div className="container d-flex align-items-center">
                    <p className="mb-0">© 2020 Company All rights reserved</p>
                    <p className="text-muted mb-0 ml-auto d-flex align-items-center">
                    <a href="#" className="d-block"><img alt="#" src="../../../public/assets/img/appstore.png" height={40} /></a>
                    <a href="#" className="d-block ml-3"><img alt="#" src="../../../public/assets/img/playmarket.png" height={40} /></a>
                    </p>
                </div>
                </section>
            </footer> 
        </>
    );
};