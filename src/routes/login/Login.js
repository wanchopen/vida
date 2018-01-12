import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function Login({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.heading}>{title}</h1>
        <form method="post">
          <div className={s.formGroup}>
            <TextField
                floatingLabelText="Username or email"
                id="usernameOrEmail"
                name="usernameOrEmail"
                type="text"
                autoFocus
            />
            <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
            />
          </div>
          <div className={s.formGroup}>
            <RaisedButton label="Log in" primary={true} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(Login);
