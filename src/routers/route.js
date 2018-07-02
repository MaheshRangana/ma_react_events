import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from '../components/home';
import Posts from '../components/post/posts';
import Post from '../components/post/post';

import AddPost from '../components/post/add_post';

import Nav from './nav';

import { Switch } from 'react-router-dom';

class Menu extends Component {
  render() {

    return (
      <Router>
        <div className="menu-wrapper">
          <Nav />
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Posts} />
            <Route exact path="/post/add" component={AddPost} />

            <Route path={`/post/:postId`} component={Post} />

          </Switch>
        </div>
      </Router>
    )
  }
}


export default Menu;
