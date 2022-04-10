import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom';
import Team from './pages/teams/Team';

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
        <Route exact path='/teams/team'>
          <Team />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
