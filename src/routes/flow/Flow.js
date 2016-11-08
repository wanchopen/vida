import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Flow.css';

function Flow({ title }) {
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

Flow.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(s)(Flow);
