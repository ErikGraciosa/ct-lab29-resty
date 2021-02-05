import React from 'react';
import PropTypes from 'prop-types';

function Response({ response }) {
  return (
    <div>
      Response Text<span>{response}</span>   tHere
    </div>
  );
}

Response.propTypes = {
  response: PropTypes.string
};

export default Response;
