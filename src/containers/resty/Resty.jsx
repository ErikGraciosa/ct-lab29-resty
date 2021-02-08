import React, { Component } from 'react';
import Request from '../../components/request/Request';
import Response from '../../components/response/Response';
// import HistoryList from '../../components/history/HistoryList';

export default class Resty extends Component {

  state = {
    url: '',
    method: 'get',
    body: '',
    response: 'this is sample response',
    history: []
  }

  urlOnChange = (e) => {
    this.setState({
      url: e.target.value
    });
  }

  bodyOnChange = (e) => {
    this.setState({
      body: e.target.value
    });
  }

  onRadioClick = (e) => {
    this.setState({
      method: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('youclicked');
  }

  render() {

    const { response } = this.state;
    console.log(this.state);

    return (
      <>
        <Request 
          urlOnChange={this.urlOnChange} 
          onRadioClick={this.onRadioClick}
          bodyOnChange={this.bodyOnChange}
          onSubmit={this.onSubmit}/>
        <br></br>
        <hr></hr>
        <br></br>
        <Response response={response}/>
      </>
    );
  }
}
