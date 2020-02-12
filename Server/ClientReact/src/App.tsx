import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import UsersTabelForm from './Forms/UsersTabelForm';
import UserForm from './Forms/UserForm'
import Header from './Forms/Header';
import 'antd/dist/antd.css';
import 'mdbreact/dist/css/mdb.css'
import 'mdbreact/dist/css/style.css'

const App = () => {
  return (
    <div className="App">

      <Router>
      <Header/>
      <Switch>
        <Route path = "/Clients">
          <UsersTabelForm/>
        </Route>
        <Route path = "/AddClient">
          <Route component = {UserForm}/>
        </Route>
        <Route path = "/updateClient/:id">
           <Route component = {UserForm}/>
        </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
