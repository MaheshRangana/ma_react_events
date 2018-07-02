import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {

  render() {
    
    return (       
          <div className="mainMenu">
              <Link to='/'> Home </Link>|
              <Link to='/post'> Posts </Link>|
              <Link to='/post/add'> Add Posts </Link>
          </div>
    )
  }
}


export default withRouter(Nav);
