import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { User } from '../components/User';
import { Page } from '../components/Page';

import logo from '../logo.svg';

import './App.scss';

class App extends Component {
  render() {
    const { user, page } = this.props;

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="" />
        <header className="App-header">
          <h1 className="App-title">Favorite photos</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
};

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    user: store.user,
    page: store.page,
  };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(App);
