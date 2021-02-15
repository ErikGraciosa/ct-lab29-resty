global.fetch = require('superagent');
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Resty from './Resty';

describe('Resty page functionality testing', () => {
  it('test GET route is functional', async() => {
    render(
      <Resty />   
    );
    
    const urlInput = screen.getByPlaceholderText('url');
    const submitButton = screen.getByText('Submit');
    
    fireEvent.change(urlInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts/1',
      },
    });
    fireEvent.submit(submitButton);
    
    return waitFor(() => {
      expect(screen.getByTestId('response')).toHaveTextContent('userId', { exact: false });
    });
  });

  it.skip('test POST route is functional', async() => {
    render(
      <Resty />
    );
    
    const urlInput = screen.getByPlaceholderText('url');
    const searchButton = screen.getByText('Submit');
    const bodyInput = screen.getByPlaceholderText('add body here...');
    const response = screen.getByTestId('response');

    fireEvent.input(urlInput, {
      target: {
        value: {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
      },
    });
    fireEvent.input(bodyInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts',
      },
    });
    fireEvent.submit(searchButton);

    console.log(response);
    return waitFor(() => {
      screen.findByText('somethingel');
    });
  });


});
