import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TeamMembers from './pages/TeamMembers';
import Tickets from './pages/Tickets';
import Projects from './pages/Projects';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Route exact path='/' component={Login}/>
        <Switch>
          <Navbar />
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/team-members' component={TeamMembers} />
            <Route path='/tickets' component={Tickets} />
            <Route path='/projects' component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


//todo:
//1.add private routes
//2.create handle logout that will be passed down from app to
//3. when logged in store token and user object data to local storage 