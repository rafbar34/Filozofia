import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Routing from "./routing/router";
import { TopBar } from "./components/common/top-bar";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Routing/>
  </React.StrictMode>
);

