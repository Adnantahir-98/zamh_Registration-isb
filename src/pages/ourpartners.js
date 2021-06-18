import React from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'



function ourpartners() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div>
            
            <section>
                <div className=" container">
                    <div className="row">
                        <Link to="/"><img src="imgs/logo.png" alt="" className="text-left float-left" style={{height:"86px", width:"200px"}}/></Link>
                    </div>
                </div>
                    <main>
                    <h2 className="font-weight-bold text-center mt-5 mb-3">Our Partners</h2>
                        <Carousel responsive={responsive} className="mb-5">
                            <div>
                                <img src="imgs/partner/Apollo-partner.jpg" alt="" className="img-fluid shadow p-3 rounded-circle" style={{height:"250px", width:"275px"}} />
                                <p style={{fontFamily:"fantasy"}} className="mt-4">Apollo</p>
                            </div>
                            <div>
                                <img src="imgs/partner/qatar_cargo-partner.png" alt="" className="img-fluid shadow p-3 rounded-circle" style={{height:"250px", width:"275px"}} />
                                <p style={{fontFamily:"fantasy"}} className="mt-4">Qatar Cargo</p>
                            </div>
                            <div>
                                <img src="imgs/partner/Bavarian_Intl_School_partner.png" alt="" className="img-fluid shadow p-3 rounded-circle" style={{height:"250px", width:"275px"}} />
                                <p style={{fontFamily:"fantasy"}} className="mt-4">Bavarian International School</p>
                            </div>
                            <div>
                                <img src="imgs/partner/square-space_partner.jpg" alt="" className="img-fluid shadow p-3 rounded-circle" style={{height:"250px", width:"275px"}} />
                                <p style={{fontFamily:"fantasy"}} className="mt-4">Square Space</p>
                            </div>
                            <div>
                                <img src="imgs/partner/cargo-transport-partner.png" alt="" className="img-fluid shadow p-3 rounded-circle" style={{height:"250px", width:"275px"}} />
                                <p style={{fontFamily:"fantasy"}} className="mt-4">Cargo Transport</p>
                            </div>
                            
                        </Carousel>   
                    </main>

                
                <div className="container">
                    <h2 className="font-weight-bold text-center mt-5 mb-5">Let's Start a Conversation</h2>
                    <div className="row">
                        <div className="col-md-6 text-left mt-4">
                            <h5 className="font-weight-bold mb-3">Ask how we can help you:</h5>
                            <h6 className="font-weight-bold">Information & sales</h6>
                            <span><i className="fa fa-envelope-square text-dark" aria-hidden="true"></i> marketing@zamhtech.com</span>
                            <p><i className="fa fa-phone-square text-dark" aria-hidden="true"></i> 0290112049</p>

                            <h6 className="font-weight-bold">Support</h6>
                            <span><i className="fa fa-envelope-square text-dark" aria-hidden="true"></i> Support@zamhtech.com</span>
                            
                            <h5 className="font-weight-bold my-3"> Office Location </h5>
                            <h2 className="font-weight-light">Pakistan:</h2>
                            <p>office# 1/07 Silk center Rehmanabad, 46000 Islamabad.</p>
                        </div>
                        <div className="col-md-6 text-left">
                            <p>Please note: all fields are required.</p>
                            <form className="" method="POST">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" required placeholder="Your full name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required placeholder="Your email address" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" required placeholder="You message here." rows="4"></textarea>
                                </div>
                                <button className="btn btn-outline-success">Submit</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
                {/* Google Maps Embeded API 'fne trades' */}
                <div class="mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d425488.34167823114!2d72.9232488!3d33.5760343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94d847ea723f%3A0xfd7d9be79182679b!2sZAMH%20Tech!5e0!3m2!1sen!2s!4v1623925193764!5m2!1sen!2s" style={{width:"99vw", height:"100vh", border:"0"}} allowfullscreen="allow" loading="lazy"></iframe>
                </div>

            </section>
        </div>
    )
}

export default ourpartners
