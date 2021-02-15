import React from 'react';
import PropTypes from 'prop-types';

function Response({ response }) {
  return (
    <div>
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
