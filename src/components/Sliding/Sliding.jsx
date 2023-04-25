// this is slider component below the header

import React, {Fragment} from 'react'
import Card from '../Card/Card.jsx'
import { Link } from 'react-router-dom'


const Sliding = () => {
    return (<Fragment>


        

            

            {/* <!-- ! this carousel will be displayed on large devices --> */}
            <section id="largeScreenSlider" className="carousel featured container p-0 slide large-screen-slider d-none d-md-none d-lg-block" data-ride="carousel">
                <h4 className="text-center">Featured products</h4>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <div className="container  four-item-slide">
                            <div className="row flex-nowrap  ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    {/* <!-- ! bootstrap card as one item  --> */}
                                    <div style={{width:"18rem"}} className="card  w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/vkqWxvB/mh1.jpg" alt="mh1" className="card-img-top" style={{height:"25rem"}}  />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/ww5ygX6/mt1.jpg" alt="mt1" className="card-img-top" style={{height:"25rem"}}/>
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/r4pqMZk/ms2.jpg" alt="ms2" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/8sM9Kzw/mp7.webp" alt="mp7" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Women Dresses */}
                    <div className="carousel-item">
                        <div className="container four-item-slide">
                            <div className="row flex-nowrap  ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    {/* <!-- ! bootstrap card as one item  --> */}
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/fCBRFhg/wd1.jpg" alt="wd1" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/vjkJzkj/wd8.jpg" alt="wd8" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/z5vHJV7/ws1.webp" alt="ws1" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/SPn7cFt/wp1.webp" alt="wp1" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Kids */}
                    <div className="carousel-item">
                        <div className="container four-item-slide">
                            <div className="row flex-nowrap  ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    {/* <!-- ! bootstrap card as one item  --> */}
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/0Gdpj2k/bk7.jpg" alt="bk7" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/qYgqQ3C/bk6.jpg" alt="bk6" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/J7mKPMN/gk3.jpg" alt="gk3" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/3y44VBq/k4.jpg" alt="k4" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Link className="carousel-control-prev" data-bs-target="#largeScreenSlider" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" data-bs-target="#largeScreenSlider" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </section>


            {/* <!-- ! this carousel will be displayed on medium devices --> */}
            <section id="mediumScreenSlider" className="carousel featured slide container p-0 medium-screen-slider d-none d-md-block d-lg-none" data-ride="carousel">
                <h4 className="text-center">Featured products</h4>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container two-item-slide">
                            <div className="row flex-nowrap ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/vkqWxvB/mh1.jpg" alt="mh1" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/ww5ygX6/mt1.jpg" alt="mt1" className="card-img-top" style={{height:"25rem"}}/>
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container two-item-slide">
                            <div className="row flex-nowrap ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/r4pqMZk/ms2.jpg" alt="ms2" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">Mast harbous Men SweatShirt</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eum!.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/8sM9Kzw/mp7.webp" alt="mp7" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">Charcoal Printed Hooded Sweat-Shirt</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container two-item-slide">
                            <div className="row flex-nowrap ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/fCBRFhg/wd1.jpg" alt="wd1" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/vjkJzkj/wd8.jpg" alt="wd8" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container two-item-slide">
                            <div className="row flex-nowrap ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/z5vHJV7/ws1.webp" alt="ws1" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/SPn7cFt/wp1.webp" alt="wp1" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container two-item-slide">
                            <div className="row flex-nowrap ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/0Gdpj2k/bk7.jpg" alt="bk7" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/qYgqQ3C/bk6.jpg" alt="bk6" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container two-item-slide">
                            <div className="row flex-nowrap ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/J7mKPMN/gk3.jpg" alt="gk3" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                    <img src="https://i.ibb.co/3y44VBq/k4.jpg" alt="k4" className="card-img-top" style={{height:"25rem"}} />
                                        <div className="card-body border border overflow-y-auto">
                                            <h3 className="item-price">₹1000</h3>
                                            <h5 className="card-title">This Is A Sample Product</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                            <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                <i className="fa fa-cart-shopping"></i>
                                                Add To Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link className="carousel-control-prev" data-bs-target="#mediumScreenSlider" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" data-bs-target="#mediumScreenSlider" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </section>

            {/* <!-- ! this carousel will be displayed on small devices --> */}

            <section id="smallScreenSlider" className="carousel container featured slide small-screen-slider p-0 d-block d-md-none d-lg-none" data-ride="carousel">
                <h4 className="text-center ">Featured products</h4>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container one-item-slide  ">
                            <div className="row flex-nowrap  ">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/vkqWxvB/mh1.jpg" alt="mh1" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/ww5ygX6/mt1.jpg" alt="mt1" className="card-img-top" style={{height:"25rem"}}/>
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/r4pqMZk/ms2.jpg" alt="ms2" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/8sM9Kzw/mp7.webp" alt="mp7" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/fCBRFhg/wd1.jpg" alt="wd1" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/vjkJzkj/wd8.jpg" alt="wd8" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/z5vHJV7/ws1.webp" alt="ws1" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                            <img src="https://i.ibb.co/FJwzK3v/india-png-logo.png" className="card-img-top" style={{height:"25rem"}} alt="..."/>
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/0Gdpj2k/bk7.jpg" alt="bk7" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/qYgqQ3C/bk6.jpg" alt="bk6" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/J7mKPMN/gk3.jpg" alt="gk3" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="carousel-item ">
                            <div className="container one-item-slide  ">
                                <div className="row flex-nowrap  ">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div style={{width:"18rem"}} className="card w-100 overflow-hidden">
                                        <img src="https://i.ibb.co/3y44VBq/k4.jpg" alt="k4" className="card-img-top" style={{height:"25rem"}} />
                                            <div className="card-body border border overflow-y-auto">
                                                <h3 className="item-price">₹1000</h3>
                                                <h5 className="card-title">This Is A Sample Product</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illo!</p>
                                                <Link to="#" className="btn btn-primary d-flex justify-content-around align-items-center w-50 mx-auto">
                                                    <i className="fa fa-cart-shopping"></i>
                                                    Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="carousel-control-prev" data-bs-target="#smallScreenSlider" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="carousel-control-next" data-bs-target="#smallScreenSlider" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </Link>
                </section>


            </Fragment>
            )
            }
            
            export default Sliding;
