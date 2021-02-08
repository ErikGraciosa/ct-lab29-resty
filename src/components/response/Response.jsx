import React from 'react';
import PropTypes from 'prop-types';

function Response({ response }) {
  return (
    <div>
      <span>{response}</span>
    </div>
  );
}

Response.propTypes = {
  response: PropTypes.any
};

export default Response;
