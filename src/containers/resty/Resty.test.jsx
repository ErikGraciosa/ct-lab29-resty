import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Resty from './Resty';


describe('Resty page functionality testing', () => {
 
  
  it.only('test GET route is functional', async() => {
    render(
      <Resty />
    );
    
    const urlInput = screen.getByPlaceholderText('url');
    const searchButton = screen.getByText('Submit');

    fireEvent.input(urlInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts/1',
      },
    });
    fireEvent.submit(searchButton);
  
    return waitFor(() => {
      screen.findByText('userID');
    });
  });
});
