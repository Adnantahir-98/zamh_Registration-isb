import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div>
            
            <footer className="bg-success py-3">
                <div className="container">
                    <div className="row my-4">
                        <div className="col-md-3">
                            <Link to="/" className="text-white"><h5>Terms & Conditions</h5></Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/" className="text-white"><h5>Privacy Policy</h5></Link>
                        </div>
                        <div className="col-md-3">  
                            <Link to="/" className="text-white"><h5>FAQ's</h5></Link>
                        </div>
                        <div className="col-md-3">  
                            <Link to="/" className="text-white"><h5>Our Partners</h5></Link>
                        </div>
                    </div>
                </div>

                <p className="mt-5 text-white"> &copy; copyright 2021 Cabrooz.Inc. All Rights Reserved.</p>

            </footer>
        </div>
    )
}

export default Footer
