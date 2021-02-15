import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';

function Response({ response }) {
  return (
    <div className={styles.response}>
      <p>Response Body Below</p>
      <pre 
        value={response}
        data-testid="response">{response}</pre>
    </div>
  );
}

Response.propTypes = {
  response: PropTypes.any
};

export default Response;
