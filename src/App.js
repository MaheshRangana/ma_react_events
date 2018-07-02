import React, { Component } from 'react';
import 'whatwg-fetch';

import Header from './components/header'
import Menu from './routers/route';


class App extends Component {
  render() {
    const styles = {
      footer: {
        width: '100%',
        float: 'left',
        background: '#414141',
        padding: '10px',
        color: '#fff',
        fontSize: '12px'
      }
   };


    return (
      <div className="container-fluid">

        <Header />

        <Menu />

        <div className="footer" style={styles.footer}>
          @2018. All right reserved.
        </div>
      </div>
    );
  }
}

export default App;
