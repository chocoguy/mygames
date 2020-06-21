import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import GameList from './components/GameList';
import GameModal from './components/gameModal';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';
import main from './main.css';




class App extends Component{
  render() {
  return (
    <Provider store={store}> 
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
      </Switch>
    <Switch>
      <Route exact path="/register"><GameModal /></Route>
    </Switch>
    </Router>
    </Provider>
  );
  }
}

function Home(){
  return(
    <div className="App">
    <AppNavbar />
    <Container>
    <GameList />
    </Container>
  </div>
  )
}

export default App;
