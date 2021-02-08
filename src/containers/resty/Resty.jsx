import React, { Component } from 'react';
import Request from '../../components/request/Request';
import Response from '../../components/response/Response';
import fetch from 'superagent';
// import HistoryList from '../../components/history/HistoryList';

export default class Resty extends Component {

  state = {
    url: '',
    method: 'get',
    body: '',
    response: 'Response will appear here',
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

  onSubmit = async(e) => {
    e.preventDefault();
    if(this.state.method === 'get'){
      const getRoute = await fetch
        .get(this.state.url)
        .then(res => res.body);

      console.log(getRoute);
      this.setState({
        response: String(JSON.stringify(getRoute))
      });

    }
    
  }

  //Need to be able to put together all the state and make a request


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
