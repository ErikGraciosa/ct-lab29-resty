import React from 'react';
import PropTypes from 'prop-types';

function Response({ response }) {
  return (
    <div>
      <pre>{response}</pre>
    </div>
  );
}

Response.propTypes = {
  response: PropTypes.any
};

export default Response;
