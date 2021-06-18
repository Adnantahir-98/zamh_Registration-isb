import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './css/bg-img.css'
import clsx from 'clsx'
import {Col, Row, Container, Card} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import {Grid, Button} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
import '../components/css/style2.css'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        outline: 'success'
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 420,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },

    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },

  }));


function Home({ location, history }) {

    

    const classes = useStyles();

    // Form Select Options for country and Gender
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const [gender, setGender] = React.useState('');
    const genderChange = (event) => {
        setGender(event.target.value);
    };


    return (
        <div>
            {/* Header Section area including Form */}

            <section className="header">
                {/* Main Nav Bar */}
                
                {/* Header Section */}
                <div className=" container">
                    <div className="row">
                        <Link to="/" name="top"><img src="imgs/logo.png" alt="" className="text-left float-left" style={{height:"86px", width:"200px"}}/></Link>
                    </div>
                </div>

                <div className="container mb-3">
                    <div className="row">
                        <div className="col-md-6 header-text">
                            <h3 className="font-weight-normal">Your time. Your day. Your life.</h3>
                            <p className="font-weight-normal">Register today and become a Cabrooz Captain</p>
                        </div>
                        <div className="col-md-6 header_form">
                            <div className="bg-white shadow-lg header_form">
                                <h3 className="text-dark text-center font-weight-normal pt-4">Create New Account</h3>
                                <form className={classes.root} noValidate autoComplete="off" className="m-auto header_form">
                                    <Col className="my-2">
                                        <FormControl className={classes.formControl} id="outlined-basic">
                                            <InputLabel id="demo-simple-select-helper-label" className="head_form-input">Country</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            className="head_form-input mb-2"
                                            value={country}
                                            id="demo-simple-select-helper"
                                            onChange={handleChange}
                                            >
                                                {/* <MenuItem value="">
                                                    <em>Swiss</em>
                                                </MenuItem> */}
                                                <MenuItem value={10}>Pakistan</MenuItem>
                                                <MenuItem value={20}>Algeria</MenuItem>
                                            </Select>
                                            {/* <FormHelperText className="input_b-text ml-1">Just Within Pakistan For Now.</FormHelperText> */}
                                        </FormControl>
                                        <TextField id="outlined-basic" className="head_form-input" label="Email" type="email" variant="outlined"/>
                                    </Col>
                                    <Col className="my-2">
                                        <TextField id="outlined-basic" className="head_form-input" label="+92" type="number" variant="outlined" />
                                    </Col>
                                    <Col className="my-2">
                                        <FormControl className={classes.formControl} id="outlined-basic">
                                            <InputLabel id="demo-simple-select-helper-label" className="head_form-input">Gender</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={gender}
                                            className="head_form-input"
                                            onChange={genderChange}
                                            >
                                                <MenuItem value={10}>Male</MenuItem>
                                                <MenuItem value={20}>Female</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                    <Col className="my-2">
                                        <TextField id="outlined-basic" className="head_form-input" label="Referal Code" variant="outlined" />
                                    </Col>
                                    <div className="w-100 mb-4 pb-4 mt-4">
                                        <Link to="/documents"><button className="btn btn-success btn-block w-75 m-auto rounded-lg">Sign up now</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            

            <section>

                <div className="container pt-5" style={{marginTop:"75px"}}>
                    <h4 className="mt-2 mb-5">Why become a captain?</h4>
                    <div className="row service_section">
                        <div className="col-md-3">
                            <img src="imgs/Group 124.png" alt="Group 124" className="img-fluid" style={{height:"90px"}} />
                            <h6 className="mt-2">Financial stability</h6>
                            <p className="text-muted">Our continued demand means you'll earn steady income.</p>
                        </div>
                        <div className="col-md-3">
                            <img src="imgs/Group 125.png" alt="Group 124" className="img-fluid" style={{height:"90px"}} />
                            <h6 className="mt-2">Best customers</h6>
                            <p className="text-muted">Its our mission to bring you the best customers in the region.</p>
                        </div>
                        <div className="col-md-3">
                            <img src="imgs/Group 126.png" alt="Group 124" className="img-fluid" style={{height:"90px"}} />
                            <h6 className="mt-2">We've got your back</h6>
                            <p className="text-muted">From insurance to assistance, you're always taken care of.</p>
                        </div>
                        <div className="col-md-3">
                            <img src="imgs/Group 127.png" alt="Group 124" className="img-fluid" style={{height:"90px"}} />
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
                                <i class="fa fa-calendar text-muted text-left mb-2 mr-2" aria-hidden="true" style={{fontSize:"48px"}}></i>
                            </div>
                            <div className="col-md-10 mb-4">
                                <h5 className="text-left">Age</h5>
                                <p className="font-weight-light text-left">You have to be over 18 years of age with a valid driver's license to drive with Cabrooz.</p>
                            </div>
                            <div className="col-md-1 mr-3">
                                <i class="fa fa-mobile text-muted text-left mr-2" aria-hidden="true" style={{fontSize:"48px"}}></i>
                            </div>
                            <div className="col-md-10 mb-4">
                                <h5 className="text-left">Smartphone</h5>
                                <p className="font-weight-light text-left">You will need an android device to use our Captain Application.</p>
                            </div>

                            <div className="col-md-1 mr-3">
                                <i class="fa fa-car text-muted text-left mr-2" aria-hidden="true" style={{fontSize:"48px"}}></i>
                            </div>
                            <div className="col-md-10 mb-4">
                                <h5 className="text-left">Vehicle</h5>
                                <p className="font-weight-light text-left">Depending on the city you want to work in, your vehicle must meet our requirements.</p>
                            </div>
                            <div className="col-md-1 mr-3 text-left">
                                <i class="fa fa-check-square-o text-left text-muted mr-2" aria-hidden="true" style={{fontSize:"48px"}}></i>
                            </div>
                            <div className="col-md-10">
                                <h5 className="text-left">Screening</h5>
                                <p className="font-weight-light text-left">You may have to undergo our standard Captain screening as per policy.</p>
                            </div>
                        </div>

                        <div className="col-md-6 mt-5">
                            <img src="imgs/fast-taxi_2.jpg" alt="taxi_car Cabrooz" className="img-fluid rounded-lg" />
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
                        <button className="btn btn-success btn-lg px-5 m-auto rounded-lg shadow font-weight-bold"><a href="#top" className="text-white">Sign up now</a></button>
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
