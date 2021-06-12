import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col, Card} from 'react-bootstrap'
import './css/bg-img.css'



function Home() {
    return (
        <div>
            
            <section>

                {/* <div className="mt-3">
                <Container className="">
                    <h3 className="m-auto">Why become a captain?</h3>
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Card classname="my-3 bg-white" border="0">
                                <Link>
                                    <Card.Img src="imgs_drawable-mdpi/Group 124.png" className="img-fluid" />
                                </Link>
                                <Card.Body>
                                    <Card.Title as="div">
                                        <h6>Financial stability</h6>
                                    </Card.Title>
                                    <Card.Text as="div" className="my-2">
                                        <div className="my-2">
                                            <p className="">Our continued demand means you'll earn steady income.</p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Card classname="my-3 bg-white" border="0">
                                <Link>
                                    <Card.Img src="imgs_drawable-mdpi/Group 125.png" className="img-fluid" />
                                </Link>
                                <Card.Body>
                                    <Card.Title as="div">
                                        <h6>Financial stability</h6>
                                    </Card.Title>
                                    <Card.Text as="div" className="my-2">
                                        <div className="my-2">
                                            <p className="">Our continued demand means you'll earn steady income.</p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Card classname="my-3 bg-white" border="0">
                                <Link>
                                    <Card.Img src="imgs_drawable-mdpi/Group 126.png" className="img-fluid mt-3" />
                                </Link>
                                <Card.Body>
                                    <Card.Title as="div">
                                        <h6>Financial stability</h6>
                                    </Card.Title>
                                    <Card.Text as="div" className="my-2">
                                        <div className="my-2">
                                            <p className="">Our continued demand means you'll earn steady income.</p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Card classname="my-3 bg-white" border="0">
                                <Link>
                                    <Card.Img src="imgs_drawable-mdpi/Group 127.png" className="img-fluid mt-3" />
                                </Link>
                                <Card.Body>
                                    <Card.Title as="div">
                                        <h6>Financial stability</h6>
                                    </Card.Title>
                                    <Card.Text as="div" className="my-2">
                                        <div className="my-2">
                                            <p className="">Our continued demand means you'll earn steady income.</p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </div> */}


                <div className="container pt-5" style={{marginTop:"75px"}}>
                    <h4 className="mt-2 mb-5">Why become a captain?</h4>
                    <div className="row service_section">
                        <div className="col-md-3">
                            <img src="imgs_drawable-mdpi/Group 124.png" alt="Group 124" className="img-fluid" style={{height:"90px"}} />
                            <h6 className="mt-2">Financial stability</h6>
                            <p className="text-muted">Our continued demand means you'll earn steady income.</p>
                        </div>
                        <div className="col-md-3">
                            <img src="imgs_drawable-mdpi/Group 125.png" alt="Group 124" className="img-fluid" style={{height:"90px"}} />
                            <h6 className="mt-2">Best customers</h6>
                            <p className="text-muted">Its our mission to bring you the best customers in the region.</p>
                        </div>
                        <div className="col-md-3">
                            <img src="imgs_drawable-mdpi/Group 126.png" alt="Group 124" className="img-fluid" style={{height:"90px"}} />
                            <h6 className="mt-2">We've got your back</h6>
                            <p className="text-muted">From insurance to assistance, you're always taken care of.</p>
                        </div>
                        <div className="col-md-3">
                            <img src="imgs_drawable-mdpi/Group 127.png" alt="Group 124" className="img-fluid" style={{height:"90px"}} />
                            <h6 className="mt-2">Independence</h6>
                            <p className="text-muted">Work whenever and wherever you wish.</p>
                        </div>
                    </div>
                </div>
            
                <div className="service_after_img-bg">
                    {/* BAckground Image after Services section  */}
                </div>

                <Container>
                    {/* <h4 className="mt-2 mb-5 text-center req_text">Requirements</h4> */}
                    <Row className="m-auto">
                        <div className="col-md-6 mt-5">
                        <div className="col-md-1 mr-3">
                                <i class="fa fa-calendar text-muted text-left mb-2" aria-hidden="true" style={{fontSize:"48px"}}></i>
                            </div>
                            <div className="col-md-10 mb-4">
                                <h5 className="text-left">Age</h5>
                                <p className="font-weight-light text-left">You have to be over 18 years of age with a valid driver's license to drive with Cabrooz.</p>
                            </div>
                            <div className="col-md-1 mr-3">
                                <i class="fa fa-mobile text-muted text-left" aria-hidden="true" style={{fontSize:"48px"}}></i>
                            </div>
                            <div className="col-md-10 mb-4">
                                <h5 className="text-left">Smartphone</h5>
                                <p className="font-weight-light text-left">You will need an android device to use our Captain Application.</p>
                            </div>

                            <div className="col-md-1 mr-3">
                                <i class="fa fa-car text-muted text-left" aria-hidden="true" style={{fontSize:"48px"}}></i>
                            </div>
                            <div className="col-md-10 mb-4">
                                <h5 className="text-left">Vehicle</h5>
                                <p className="font-weight-light text-left">Depending on the city you want to work in, your vehicle must meet our requirements.</p>
                            </div>
                            <div className="col-md-1 mr-3">
                                <i class="fa fa-check-square-o text-muted text-left" aria-hidden="true" style={{fontSize:"48px"}}></i>
                            </div>
                            <div className="col-md-10">
                                <h5 className="text-left">Screening</h5>
                                <p className="font-weight-light text-left">You may have to undergo our standard Captain screening as per policy.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <img src="imgs_drawable-mdpi/fast-taxi_2.jpg" alt="taxi_car Cabrooz" className="img-fluid rounded-lg" />
                        </div>

                        {/* <Col sm={12} md={8} lg={6} xl={3}>
                            <h5>Age</h5>
                            <p className="font-weight-light">You have to be over 18 years of age with a valid driver's license to drive with cabrooz.</p>
                        </Col>
                        <Col sm={12} md={10} lg={10} xl={3}>
                            <h5>Age</h5>
                            <p className="font-weight-light">You have to be over 18 years of age with a valid driver's license to drive with cabrooz.</p>
                        </Col>  */}
                    </Row>
                </Container>

                    <div className="col py-5 bg-light my-5">
                        <h4 className="mb-2">Want to become a captain today?</h4>
                        <button className="btn btn-success btn-lg px-5 m-auto rounded-lg shadow font-weight-bold">Sign up now</button>
                    </div>


                    <Container>
                        <Row className="m-auto py-5">
                            <div className="col-md-4">
                                <h1 className="bg-light rounded-circle w-25 m-auto py-3 shadow-sm">1</h1>
                                <h5 className="text-center mt-2">Register</h5>
                                <p className="font-weight-light text-center">Complete the form at the top and apply to become a Cabrooz Captain.</p>
                            </div>
                            <div className="col-md-4">
                                <h1 className="bg-light rounded-circle w-25 m-auto py-3 shadow-sm">2</h1>
                                <h5 className="text-center mt-2">Train</h5>
                                <p className="font-weight-light text-center">After filling the form, please select your training slot-you can train online or at our offices.</p>
                            </div>
                            <div className="col-md-4">
                                <h1 className="bg-light rounded-circle w-25 m-auto py-3 shadow-sm">3</h1>
                                <h5 className="text-center mt-2">Ride</h5>
                                <p className="font-weight-light text-center">After completing your training, you will receive a confirmation SMS. Log in to the Captain Application and start earning.</p>
                            </div>
                        </Row>
                    </Container>
                
                

            </section>
        </div>
    )
}

export default Home
