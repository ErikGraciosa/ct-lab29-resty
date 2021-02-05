import React from 'react';

function Request() {
  return (
    <form>
      <input type="text"></input>
      <label>GET<input type="radio" name="crud-route"></input></label>
      <label>POST<input type="radio" name="crud-route"></input></label>
      <label>PUT<input type="radio" name="crud-route"></input></label>
      <label>DELETE<input type="radio" name="crud-route"></input></label>
      <input type="text"></input>
      <button>Submit</button>
    </form>
  );
}

export default Request;
