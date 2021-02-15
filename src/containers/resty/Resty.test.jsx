global.fetch = require('superagent'); // eslint-disable-line
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
      expect(screen.getByTestId('response'))
        .toHaveTextContent('userId', { exact: false });
    });
  });

  it('test POST route is functional', async() => {
    render(
      <Resty />
    );
    
    const urlInput = screen.getByPlaceholderText('url');
    const submitButton = screen.getByText('Submit');
    const postRadio = screen.getByText('POST');
    const bodyInput = screen.getByPlaceholderText('add body here...');
    
    fireEvent.change(urlInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts',
      },
    });
    fireEvent.change(bodyInput, {
      target: {
        value: {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
      },
    });
    fireEvent.click(postRadio);
    
    fireEvent.submit(submitButton);

    return waitFor(() => {
      expect(screen.getByTestId('response'))
        .toHaveTextContent('"id": 101');
    });
  });

  it('test PUT route is functional', async() => {
    render(
      <Resty />
    );
    
    const urlInput = screen.getByPlaceholderText('url');
    const submitButton = screen.getByText('Submit');
    const putRadio = screen.getByText('PUT');
    const bodyInput = screen.getByPlaceholderText('add body here...');
    
    fireEvent.change(urlInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts/1',
      },
    });
    fireEvent.change(bodyInput, {
      target: {
        value: {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
      },
    });
    fireEvent.click(putRadio);
    
    fireEvent.submit(submitButton);

    return waitFor(() => {
      expect(screen.getByTestId('response'))
        .toHaveTextContent('"id": 1');
    });
  });

  it('test DELETE route is functional', async() => {
    render(
      <Resty />
    );
    
    const urlInput = screen.getByPlaceholderText('url');
    const submitButton = screen.getByText('Submit');
    const deleteRadio = screen.getByText('DELETE');
    
    fireEvent.change(urlInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts/1',
      },
    });
    fireEvent.click(deleteRadio);
    
    fireEvent.submit(submitButton);

    return waitFor(() => {
      expect(screen.getByTestId('response'))
        .toHaveTextContent('{}');
    });
  });
});
