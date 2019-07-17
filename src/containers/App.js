import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';
import { handleLogin } from '../actions/UserActions';

import logo from '../logo.svg';

import './App.scss';

class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props;

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="" />
        <header className="App-header">
          <h1 className="App-title">Favorite photos</h1>
        </header>
        <Page
	        error={page.error}
	        photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}
        />
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
};

// приклеиваем данные из store
const mapStateToProps = store => ({
  user: store.user,
  page: store.page,
});

const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
	handleLoginAction: () => dispatch(handleLogin()),
});

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
