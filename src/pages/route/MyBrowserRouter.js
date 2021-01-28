import React from 'react';
import styles from './MyBrowserRouter.css';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <BrowserRouter basename="/admin">
        <Link to="/home">HOME</Link>
      </BrowserRouter>
    </div>
  );
}
