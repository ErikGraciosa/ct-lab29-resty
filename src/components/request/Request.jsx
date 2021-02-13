import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

function Request({ urlOnChange, onRadioClick, bodyOnChange, onSubmit }) {
  return (
    <form>
      <input 
        className={styles.url} 
        placeholder="url"
        type="text" 
        onChange={urlOnChange}>
      </input>
      <label>
        <input 
          
          type="radio" 
          name="crud-route" 
          value="get" 
          defaultChecked
          onClick={onRadioClick}>
        </input>GET
      </label>
      <label>
        <input 
          type="radio" 
          name="crud-route"
          value="post"
          onClick={onRadioClick}>
        </input>POST
      </label>
      <label>
        <input 
          type="radio" 
          name="crud-route"
          value="put"
          onClick={onRadioClick}>
        </input>PUT
      </label>
      <label>
        <input 
          type="radio" 
          name="crud-route"
          value="delete"
          onClick={onRadioClick}>
        </input>DELETE
      </label>
      <input 
        placeholder="add body here..."
        className={styles.body}
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
