import React from 'react';
import Create from './components/create/create'
import Read from './components/read/read'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Create} />
            <Route path='/read' exact component={Read} />
          </Switch>
        </div >
      </Router>
    </Provider>
  );
}

export default App;
