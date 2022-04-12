import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom';
import Team from './pages/teams/Team';
import Challenge from './pages/challenges/Challenges';
import Scoreboard from './pages/scoreboard/Scoreboard';
import Footer from './components/Footer';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/main'>
          <Main />
        </Route>
        <Route exact path='/teams/Team'>
          <Team />
        </Route>
        <Route exact path='/challenges/Challenges'>
          <Challenge />
        </Route>
        <Route exact path='/scoreboard/Scoreboard'>
          <Scoreboard />
        </Route>
        <Route exact path='/login/Login'>
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
