import React from 'react';
import PropTypes from 'prop-types';

function Request({ onChange }) {
  return (
    <form>
      <input type="text" onChange={onChange}></input>
      <label>GET
        <input type="radio" name="crud-route" value="get"></input>
      </label>
      <label>POST
        <input type="radio" name="crud-route"></input>
      </label>
      <label>PUT
        <input type="radio" name="crud-route"></input>
      </label>
      <label>DELETE
        <input type="radio" name="crud-route">
        </input>
      </label>
      <input type="text"></input>
      <button>Submit</button>
    </form>
  );
}

Request.propTypes = {
  onChange: PropTypes.func
};

export default Request;
