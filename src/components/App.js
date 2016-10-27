import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';

var App = React.createClass({
  getInitialState: function() {
    return {
      currentUser: null,
      loggedIn: false,
      widgets: {}
    }
  },

  render: function() {
    if (this.state.loggedIn) {
      return <div>
        <header>
          <h1>Login successful! Welcome back, { this.state.currentUser }</h1>
          <div>
            <Link to='/'>Widgets</Link> |
            <Link to='/reports'>Reports</Link> |
            <a href='' onClick={ this.signOut }>Sign Out</a>
          </div>
        </header>

        <hr />

        { React.cloneElement(this.props.children, {
          currentUser: this.state.currentUser,
          widgets: this.state.widgets,
          firebaseRef: this.firebaseRef
          // add any additional props you want your children to have here
          // as well.
        }) }
      </div>
    } else {
      return <div>Loading</div>;
    }
  },

  signOut: function() {
    firebase.auth().signOut();
  },

  componentDidMount: function() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true, currentUser: user.displayName });
      } else {
        browserHistory.push('/login');
      }
    })

    this.firebaseRef = firebase.database().ref("widgets");
    this.firebaseRef.on("child_added", (dataSnapshot) => {
      this.state.widgets[dataSnapshot.key] = dataSnapshot.val();
      this.setState({
        widgets: this.state.widgets
      });
    });


  }

})

export default App;
