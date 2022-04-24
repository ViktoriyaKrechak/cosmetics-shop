import React, { useEffect } from 'react';
import './App.scss';
import Main from '../Pages/Main'
import { useRoutes } from 'react-router';
import routes from '../../routes';

function App() {
  // useCards();
  const route = useRoutes(routes)

  return route
}

export default App;
