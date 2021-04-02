import React from "react";

export default function Popular () {
    return (
        <>
            <div className="py-3 title d-flex align-items-center">
                <h5 className="m-0">Most sales</h5>
                <a className="font-weight-bold ml-auto" href="most_popular.html">26 places <i className="feather-chevrons-right" /></a>
            </div> 
            <div className="most_sale">
                    <div className="row mb-3">
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                            <div className="star position-absolute">
                            <span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute">
                            <a href="#"><i className="feather-heart" /></a>
                            </div>
                            <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                            <a href="restaurant.html">
                            <img alt="#" src="../../../public/assets/img/sales1.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                            <h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant </a></h6>
                            <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                            <p className="text-gray mb-3 time">
                                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 15–25 min</span> <span className="float-right text-black-50"> $500 FOR TWO</span>
                            </p>
                            </div>
                            <div className="list-card-badge"><span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                            <div className="star position-absolute">
                            <span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute">
                            <a href="#"><i className="feather-heart" /></a>
                            </div>
                            <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                            <a href="restaurant.html">
                            <img alt="#" src="../../../public/assets/img/sales2.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                            <h6 className="mb-1"><a href="restaurant.html" className="text-black">Thai Famous Cuisine</a></h6>
                            <p className="text-gray mb-3">North Indian • Indian • Pure veg</p>
                            <p className="text-gray mb-3 time">
                                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 30–35 min</span> <span className="float-right text-black-50"> $250 FOR TWO</span>
                            </p>
                            </div>
                            <div className="list-card-badge"><span className="badge badge-success">OFFER</span> <small>65% off</small></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                        <div className="list-card-image">
                            <div className="star position-absolute">
                            <span className="badge badge-success"><i className="feather-star" /> 3.1 (300+)</span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute">
                            <a href="#"><i className="feather-heart" /></a>
                            </div>
                            <div className="member-plan position-absolute"><span className="badge badge-dark">Promoted</span></div>
                            <a href="restaurant.html">
                            <img alt="#" src="../../../public/assets/img/sales3.png" className="img-fluid item-img w-100" />
                            </a>
                        </div>
                        <div className="p-3 position-relative">
                            <div className="list-card-body">
                            <h6 className="mb-1"><a href="restaurant.html" className="text-black">The osahan Restaurant </a></h6>
                            <p className="text-gray mb-3">North • Hamburgers • Pure veg</p>
                            <p className="text-gray mb-3 time">
                                <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i className="feather-clock" /> 15–25 min</span> <span className="float-right text-black-50"> $500 FOR TWO</span>
                            </p>
                            </div>
                            <div className="list-card-badge"><span className="badge badge-danger">OFFER</span> <small>65% OSAHAN50</small></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    );
};