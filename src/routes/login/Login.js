/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
//import ReactStormpath, { Router, AuthenticatedRoute, LoginLink } from 'react-stormpath';
//import { Router, Route, hashHistory } from 'react-router'

/*ReactStormpath.init({
  // Optional: Set if you want to use your own dispatcher or configure one such as 'redux'.
  // When no dispatcher is set, the default is 'flux'.
  dispatcher: {
    // Optional: Can either be 'flux' or 'redux'. Defaults to 'flux'.
    type: 'redux',

    // Required when you use type 'redux'.
    // The store that you wish to dispatch events to.
    store: ReduxStore,
  },

  // Optional: If your are running our framework integration
  // (e.g. express-stormpath) on a different domain, or you have
  // changed the default endpoints in the framework integration.
  // Values shown are the defaults.
  endpoints: {
    baseUri: null, // E.g. https://api.example.com
    me: '/flow',
    login: '/login',
    register: '/register',
    verifyEmail: '/verify',
    forgotPassword: '/forgot',
    changePassword: '/change',
    logout: '/logout'
  }
});*/

function Login({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p className={s.lead}>Log in with your username or email address.</p>

        <form method="post">
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="usernameOrEmail">
              Username or email address:
            </label>
            <input
              className={s.input}
              id="usernameOrEmail"
              type="text"
              name="usernameOrEmail"
              autoFocus
            />
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="password">
              Password:
            </label>
            <input
              className={s.input}
              id="password"
              type="password"
              name="password"

            />
          </div>
          <div className={s.formGroup}>
            <button className={s.button} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(Login);
