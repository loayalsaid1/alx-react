import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';


function App({ isLoggedIn = false }) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ]

  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
      <div className="App-body">
        {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login /> }
      </div>

      <div className="App-footer">
        <Footer />
      </div>
    </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
