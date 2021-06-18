// import React from 'react'
// import clsx from 'clsx'
// import {Col, Row, Container, Card} from 'react-bootstrap'
// import { makeStyles } from '@material-ui/core/styles'
// import {Grid, Button} from '@material-ui/core'

// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
// import List from '@material-ui/core/List'
// import Divider from '@material-ui/core/Divider'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import { Link } from 'react-router-dom'
// import '../css/style2.css'



// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//         outline: 'success'
//       },
//     },

//     list: {
//         width: 250,
//       },
//       fullList: {
//         width: 'auto',
//       },

//   }));


// function Header() {
//     const classes = useStyles();

//     // navigation Bar Drawer Menu
//     const [state, setState] = React.useState({
//         right: false,
//       });
    
//       const toggleDrawer = (anchor, open) => (event) => {
//         if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//           return;
//         }
    
//         setState({ ...state, [anchor]: open });
//       };

//       const list = (anchor) => (
//         <div
//           className={clsx(classes.list, {
//             [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//           })}
//           role="presentation"
//           onClick={toggleDrawer(anchor, false)}
//           onKeyDown={toggleDrawer(anchor, false)}
//         >
//           <List>
//             {['Home', 'About', 'Contact', 'More'].map((text, index) => (
//               <ListItem button key={text}>
//                 {/* <Link to="/"><ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <InfoIcon />, <PermContactCalendarIcon />}</ListItemIcon></Link> */}
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       );


//     return (
//         <div>

//             <section>
//                 {/* Main Nav Bar */}
//                 <header>
//                     <div className="nav_bg">
//                         {['right'].map((anchor) => (
//                             <React.Fragment key={anchor}>
//                                 <Button onClick={toggleDrawer(anchor, true)}><h2><i className="fa fa-bars text-white shadow-sm"></i></h2></Button>
//                                 <SwipeableDrawer
//                                     anchor={anchor}
//                                     open={state[anchor]}
//                                     onClose={toggleDrawer(anchor, false)}
//                                     onOpen={toggleDrawer(anchor, true)}
//                                 >
//                                     {list(anchor)}
//                                 </SwipeableDrawer>
//                             </React.Fragment>
//                         ))}
//                     </div>
                    
//                 </header>

//             </section>
//         </div>
//     )
// }

// export default Header

