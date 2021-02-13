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
      e.preventDefault();
      const getRoute = await fetch
        .get(this.state.url)
        .then(res => res.body);

      this.setState({
        response: String(JSON.stringify(getRoute, null, 2))
      });
    } 
    if(this.state.method === 'post') {
      e.preventDefault();
      const postRoute = await fetch
        .post(this.state.url)
        .send(this.state.body)
        .then(res => res.body);

      this.setState({
        response: String(JSON.stringify(postRoute, null, 2))
      });
    }
    if(this.state.method === 'put') {
      e.preventDefault();
      const postRoute = await fetch
        .put(this.state.url)
        .send(this.state.body)
        .then(res => res.body);

      this.setState({
        response: String(JSON.stringify(postRoute, null, 2))
      });
    }
    if(this.state.method === 'delete') {
      e.preventDefault();
      const postRoute = await fetch
        .delete(this.state.url)
        .then(res => res.body);
        
      this.setState({
        response: String(JSON.stringify(postRoute, null, 2))
      });
    }
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
