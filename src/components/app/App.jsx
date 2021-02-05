import React from 'react';
import Request from '../request/Request';
import Response from '../response/Response';
import HistoryList from '../history/HistoryList';

export default function App() {

  return (
    <>
      <HistoryList />
      <Request />
      <Request />
      <br></br>
      <hr></hr>
      <br></br>
      <Response />
    </>);
}
