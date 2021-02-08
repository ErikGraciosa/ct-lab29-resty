import React from 'react';
import PropTypes from 'prop-types';

function Request({ urlOnChange, onRadioClick, bodyOnChange, onSubmit }) {
  return (
    <form>
      <input 
        type="text" 
        onChange={urlOnChange}>
      </input>
      <label>GET
        <input 
          type="radio" 
          name="crud-route" 
          value="get" 
          defaultChecked
          onClick={onRadioClick}>
        </input>
      </label>
      <label>POST
        <input 
          type="radio" 
          name="crud-route"
          value="post"
          onClick={onRadioClick}>
        </input>
      </label>
      <label>PUT
        <input 
          type="radio" 
          name="crud-route"
          value="put"
          onClick={onRadioClick}>
        </input>
      </label>
      <label>DELETE
        <input 
          type="radio" 
          name="crud-route"
          value="delete"
          onClick={onRadioClick}>
        </input>
      </label>
      <input 
        type="text"
        onChange={bodyOnChange}>
      </input>
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}

Request.propTypes = {
  urlOnChange: PropTypes.func,
  onRadioClick: PropTypes.func,
  bodyOnChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Request;
