import React from 'react'
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
import '../css/style2.css'



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
        minWidth: 400,
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


function Header() {
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


    // navigation Bar Drawer Menu
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Home', 'About', 'Contact', 'More'].map((text, index) => (
              <ListItem button key={text}>
                {/* <Link to="/"><ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <InfoIcon />, <PermContactCalendarIcon />}</ListItemIcon></Link> */}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );


    return (
        <div>

            <section className="header">
                {/* Main Nav Bar */}
                <header>
                    <div className="nav_bg">
                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}><img src="imgs_drawable-mdpi/Group 119.png" alt="Group 119" className="img-fluid ml-auto w-100" /></Button>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </div>
                    
                </header>
                {/* Header Section */}
                <div className=" container">
                    <div className="row">
                        <img src="imgs_drawable-mdpi/logo.png" alt="" className="text-left float-left" style={{height:"86px", width:"200px"}}/>
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
                                            className="head_form-input"
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
                                            <FormHelperText className="input_b-text">Just Within Pakistan For Now.</FormHelperText>
                                        </FormControl>
                                        <TextField id="outlined-basic" className="head_form-input" label="Email" variant="outlined"/>
                                    </Col>
                                    <Col className="my-2">
                                        <TextField id="outlined-basic" className="head_form-input" label="+92" variant="outlined" />
                                    </Col>
                                    <Col className="my-2">
                                        <FormControl className={classes.formControl} id="outlined-basic">
                                            <InputLabel id="demo-simple-select-helper-label head_form-input">Gender</InputLabel>
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
                                        <button className="btn btn-success btn-block w-75 m-auto rounded-lg">Sign up now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Header

