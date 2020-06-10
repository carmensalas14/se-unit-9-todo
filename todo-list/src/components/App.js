import React from 'react';
import AddTask from '../containers/AddTask';
import List from '../containers/VisibleTaskList';
import Footer from './Footer';

const App = () => (
  <div>
    <AddTask />
    <List />
    <Footer />
  </div>
);
export default App;
