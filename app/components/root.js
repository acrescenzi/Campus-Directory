import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './home';
import Campuses from './campuses';
import SingleCampus from './singleCampus';
import Students from './students';
import SingleStudent from './singleStudent'
import AddCampus from './addCampus'
import AddStudent from './addStudent'


class Root extends Component {
  render(){
      return (
        <Router>
          <div className="main-container">
            <div className="nav">
              <Link to = "/">HOME</Link>
              <Link to = "/campuses">CAMPUSES</Link>
              <Link to = "/students">STUDENTS</Link>
            </div>
            <div className="main"> 
              <Route exact path = '/' component={Home}/>
              <Route path = '/students' component={Students}/>
              <Route path = '/campuses' component={Campuses}/>
              <Route path = '/campus/:id' component={SingleCampus}/>
              <Route path = '/student/:id' component={SingleStudent}/>
              <Route path = '/addCampus' component={AddCampus}/>
              <Route path = '/addStudent' component={AddStudent}/>
            </div>
          </div>
        </Router>
      )
    }
  }



export default Root
