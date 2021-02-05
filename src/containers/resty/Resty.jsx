import React, { Component } from 'react';
import Request from '../../components/request/Request';
import Response from '../../components/response/Response';
import HistoryList from '../../components/history/HistoryList';

export default class Resty extends Component {

  state = {
    url: '',
    method: '',
    body: '',
    response: 'this is sample response',
    history: []
  }


  render() {

    const { response } = this.state;

    return (
      <>
        <HistoryList />
        <Request />
        <Request />
        <br></br>
        <hr></hr>
        <br></br>
        <Response response={response}/>
      </>
    );
  }
}
