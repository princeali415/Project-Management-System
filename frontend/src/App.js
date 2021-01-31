import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TeamMembers from './pages/TeamMembers';
import Tickets from './pages/Tickets';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/team-members' component={TeamMembers} />
          <Route path='/tickets' component={Tickets} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
