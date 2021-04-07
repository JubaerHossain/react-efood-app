// @flow
import  React ,{useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authHeader } from '../_helpers/auth-header';
import { MapModal } from './MapModal';
import { settingActions } from '../_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
export  function Header () {
    const dispatch = useDispatch();
      useEffect(() => {        
         dispatch(settingActions.getsettingAll());
      }, []);
      const history = useHistory();
  return (
    <>
         <header className="section-header cs-bloc">
                <section className="header-main shadow-sm bg-white">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-sm-1 col-md-1 col-lg-1">
                        <Link to="/" className="brand-wrap mb-0">
                        <img alt="#" className="img-fluid" src="../../../public/assets/img/logo_web.png" />
                        </Link>
                    </div>
                    {history.location.pathname === '/' ?
                       <MapModal/>
                       :
                       <div className="col-sm-6 col-md-6 col-lg-6 d-flex align-items-center mob_search"></div>
                    }
                    <div className="col-sm-5 col-md-5 col-lg-5 auth_sign">
                        <div className="d-flex align-items-center justify-content-end">                        
                        <a href="login.html" className="widget-header mr-4 text-dark ">
                            <div className="icon d-flex align-items-center"><i className="feather-user h6 mr-2 mb-0" /> <span>Sign in</span></div>
                        </a>
                        {  authHeader() ?  
                        <div className="dropdown mr-4 t-none">
                            <a href="#" className="dropdown-toggle text-dark py-3 d-block" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img alt="#" src="../../../public/assets/img/user/1.jpg" className="img-fluid rounded-circle header-user mr-2 header-user" /> Hi Osahan
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="profile.html">My account</a>
                                <a className="dropdown-item" href="faq.html">Delivery support</a>
                                <a className="dropdown-item" href="contact-us.html">Contant us</a>
                                <a className="dropdown-item" href="terms.html">Term of use</a>
                                <a className="dropdown-item" href="privacy.html">Privacy policy</a>
                                <a className="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </div>
                        :''}
                          
                        <a href="checkout.html" className="widget-header mr-4 text-dark">
                            <div className="icon d-flex align-items-center mob_log"><i className="feather-shopping-cart h6 mr-2 mb-0" /> <span>Cart</span></div>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </header>
            

            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                   <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Filter</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body p-0">
                    <div className="osahan-filter">
                        <div className="filter">
                        <div className="p-3 bg-light border-bottom">
                            <h6 className="m-0">SORT BY</h6>
                        </div>
                        <div className="custom-control border-bottom px-0  custom-radio">
                            <input type="radio" id="customRadio1f" name="location" className="custom-control-input" defaultChecked />
                            <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio1f">Top Rated</label>
                        </div>
                        <div className="custom-control border-bottom px-0  custom-radio">
                            <input type="radio" id="customRadio2f" name="location" className="custom-control-input" />
                            <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio2f">Nearest Me</label>
                        </div>
                        <div className="custom-control border-bottom px-0  custom-radio">
                            <input type="radio" id="customRadio3f" name="location" className="custom-control-input" />
                            <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio3f">Cost High to Low</label>
                        </div>
                        <div className="custom-control border-bottom px-0  custom-radio">
                            <input type="radio" id="customRadio4f" name="location" className="custom-control-input" />
                            <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio4f">Cost Low to High</label>
                        </div>
                        <div className="custom-control border-bottom px-0  custom-radio">
                            <input type="radio" id="customRadio5f" name="location" className="custom-control-input" />
                            <label className="custom-control-label py-3 w-100 px-3" htmlFor="customRadio5f">Most Popular</label>
                        </div>
                        <div className="p-3 bg-light border-bottom">
                            <h6 className="m-0">FILTER</h6>
                        </div>
                        <div className="custom-control border-bottom px-0  custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultCheck1" defaultChecked />
                            <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck1">Open Now</label>
                        </div>
                        <div className="custom-control border-bottom px-0  custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultCheck2" />
                            <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck2">Credit Cards</label>
                        </div>
                        <div className="custom-control border-bottom px-0  custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="defaultCheck3" />
                            <label className="custom-control-label py-3 w-100 px-3" htmlFor="defaultCheck3">Alcohol Served</label>
                        </div>
                        <div className="p-3 bg-light border-bottom">
                            <h6 className="m-0">ADDITIONAL FILTERS</h6>
                        </div>
                        <div className="px-3 pt-3">
                            <input type="range" className="custom-range" min={0} max={100} name="minmax" />
                            <div className="form-row">
                            <div className="form-group col-6">
                                <label>Min</label>
                                <input className="form-control" placeholder="$0" type="number" />
                            </div>
                            <div className="form-group text-right col-6">
                                <label>Max</label>
                                <input className="form-control" placeholder="$1,0000" type="number" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer p-0 border-0">
                    <div className="col-6 m-0 p-0">
                        <button type="button" className="btn border-top btn-lg btn-block" data-dismiss="modal">Close</button>
                    </div>
                    <div className="col-6 m-0 p-0">
                        <button type="button" className="btn btn-primary btn-lg btn-block">Apply</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </>
  );
};