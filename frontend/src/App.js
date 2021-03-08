import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TeamMembers from './pages/TeamMembers';
import Tickets from './pages/Tickets';
import Projects from './pages/Projects';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute';
import NavbarMaterialUI from './components/Navbar/NavbarMaterialUI';

function App() {

  const [loggedIn , setLoggedIn] = useState(false)

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLoggedIn(false)
    
  }

  return (
    <>
      <Router>
        
        <Route exact path='/' render={(props) => {
          return <Login {...props} setLoggedIn={setLoggedIn} />
        }}/>
        <Switch>
          {/* {loggedIn ? <Navbar logout={logout}/> : <></>} */}
          {loggedIn ? <NavbarMaterialUI logout={logout}/> : <></>}
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/team-members' component={TeamMembers} />
          <PrivateRoute path='/tickets' component={Tickets} />
          <PrivateRoute path='/projects' component={Projects} />
          
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