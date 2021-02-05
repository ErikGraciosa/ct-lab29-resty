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

  urlOnChange = (e) => {
    this.setState({
      url: e.target.value
    });
  }

  render() {

    const { response } = this.state;
    console.log(this.state);

    return (
      <>
        <HistoryList />
        <Request onChange={this.urlOnChange}/>
        <Request />
        <br></br>
        <hr></hr>
        <br></br>
        <Response response={response}/>
      </>
    );
  }
}
