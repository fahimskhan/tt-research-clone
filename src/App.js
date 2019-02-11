import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
//import ToggleButton from '@material-ui/lab/ToggleButton';
import re_Search_title from './assets/re_Search_title.png';
import first_pic from './assets/first_pic.png';
import second_pic from './assets/second_pic.png';
import third_pic from './assets/third_pic.png';
import arrow from './assets/arrow.png';
import tt_logo from './assets/tt_logo.png';
import fb from './assets/fb.png';
import twitter from './assets/twitter.png';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#000000'
    },
  },
  status: {
    danger: 'red',
  },
  shadows: ['none'],
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{display:'flex', flexDirection:'column'}}>
          <AppBar color='inherit' position='absolute' style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingRight: 80, paddingLeft: 80, borderBottom:'solid lightgrey 1px'}}>
            <img src={re_Search_title} alt='re:SearchNM' style={{height: 41, width:190, paddingTop:7, paddingBottom: 5}}/>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', height: 40, padding:5}}>
              <Button style={{textTransform:'none', color:'grey', marginRight: '10px'}}>About re:SearchNM</Button>
              <Button style={{textTransform:'none', color:'grey', marginRight: '10px', marginLeft:'10px'}}>How to Get Access</Button>
              <Button style={{textTransform:'none', color:'grey', marginRight: '10px', marginLeft:'10px'}}>Upgrade</Button>
              <Button style={{textTransform:'none', color:'grey', marginRight: '10px', marginLeft:'10px'}}>Register</Button>
              <Button variant='outlined' color='inherit' style={{textTransform:'none', color:'#202f64', marginLeft:'10px'}}>Sign in</Button>
            </div>
          </AppBar>
          <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', paddingRight: 80, paddingLeft: 80, paddingTop: 75}}>
            <div style={{width:470}}>
              <h1 style={{fontSize: '3em', fontWeight: 500, color: '#ba0c20', fontFamily:'arial', marginBlockEnd: '0.2em'}}>
                Making legal professionals informed, effective, and successful
              </h1>
              <h5 style={{width: 460,fontSize: '1.75em', fontWeight: 300, color: 'grey', fontFamily:'arial', marginBlockStart: '0.01em', marginBlockEnd: '0.0em'}}>
                re:SearchNM lets you find documents and case information across the entire state.
              </h5>
              <Button variant='outlined' color='inherit' style={{textTransform:'none', color:'#202f64', height: 56, width: 360, fontSize: '1.10em', marginTop: 10}}>
                Sign in with Your File & Serve Account
              </Button>
            </div>
            <img src={first_pic} alt='first_pic' style={{height: 400, width:450, paddingTop:50, paddingBottom: 5}}/>
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', paddingRight: 60, paddingLeft: 60, paddingTop: 10}}>
            <img src={second_pic} alt='second_pic' style={{height: 350, width:500, paddingTop:50, paddingBottom: 5}}/>
            <div style={{width: 470, paddingTop: 100, paddingRight: 25}}>
              <h4 style={{fontFamily: 'arial', color:'darkslategrey', fontSize: 'xx-large', fontWeight: 100, marginBackEnd: 0, marginBottom: 15}}>
                How It Works
              </h4>
              <span style={{fontFamily: 'arial', color:'grey', fontSize: 'large'}}>
                Case data from the entire state is accessible to attorneys from a single, unified portal that is easily accessed with your File & Serve login. You are empowered with anytime access to all the facts necessary to stay informed, effective and successful.
              </span>
              <div style={{paddingTop: 20}}><a href="" style={{fontFamily: 'arial', fontSize: 'larger'}}>Learn More<img src={arrow} style={{width: 20, height: 15}}/></a></div>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', paddingRight: 60, paddingLeft: 60, paddingTop: 10}}>
            <div style={{width: 470, paddingTop: 100, paddingLeft: 25}}>
              <h4 style={{fontFamily: 'arial', color:'darkslategrey', fontSize: 'xx-large', fontWeight: 100, marginBackEnd: 0, marginBottom: 15}}>
                Why re:SearchNM
              </h4>
              <span style={{fontFamily: 'arial', color:'grey', fontSize: 'large'}}>
                What wasn’t practical before is now easily accessible. Change the way you research cases to save you time and yield greater results. Gone are the days of logging in to multiple jurisdictions to get the information you need.
              </span>
              <div style={{paddingTop: 20}}>
                <span style={{fontFamily: 'arial', color:'grey', fontSize: 'large'}}>A single database. A single application. A single login.</span>
              </div>
            </div>
            <img src={third_pic} alt='third_pic' style={{height: 370, width:500, paddingTop:50, paddingBottom: 5}}/>
          </div>
          <div style={{paddingTop: 15}}>
            <center>
              <h4 style={{fontFamily: 'arial', color:'darkslategrey', fontSize: 'xx-large', fontWeight: 100, marginBackEnd: 0, marginBottom: 15}}>
                Ready to start re:Searching?
              </h4>
              <Button variant='outlined' color='inherit' style={{textTransform:'none', color:'#202f64', height: 56, width: 360, fontSize: '1.10em', marginTop: 10}}>
                Sign in with Your File & Serve Account
              </Button>
            </center>
          </div>
          <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', paddingRight: 70, paddingLeft: 50, paddingTop: 30, fontFamily: 'arial', borderTop: '1px solid lightgrey', marginTop: 70}}>
            <div>
              <ul style={{listStyleType: 'none'}}>
                <li style={{paddingTop: 5, paddingBottom: 5}}>© 2019 re:SearchNM</li>
                <li style={{paddingTop: 5, paddingBottom: 5}}> <a href="">Disclaimer</a> <span> | </span> <a href="">Frequently Asked Questions</a> </li>
                <li style={{paddingTop: 5, paddingBottom: 5}}> <span style={{fontWeight: 600}}>Contact Us: </span> <a href="">research.support@tylertech.com</a> <span> | (844) 307-8720</span> </li>
                <li style={{paddingTop: 5, paddingBottom: 5}}> <img src={fb} style={{paddingRight: 5}}></img> <img src={twitter} style={{paddingLeft: 5}}></img> </li>
              </ul>
            </div>
            <div>
              <img src={tt_logo} alt='Tyler Tech' style={{padding: 10, width: 200, height: 50}}></img>
            </div>
          </div>
        </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
