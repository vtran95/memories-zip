import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import NaviBar from '../../components/NaviBar/NaviBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import MemoriesIndex from '../Memories/IndexPage/IndexPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="AppPage">
            <NaviBar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            <Switch>
              <Route exact path='/' render={(props) => 
                <WelcomePage 
                  {...props}
                />
              }/>
              <Route path='/memories' render={(props) => (
                userService.getUser() ? 
                <MemoriesIndex {...props} />
                    :
                <Redirect to='/login' />
              )}/>
              <Route exact path='/signup' render={(props) => 
                <SignupPage 
                  {...props}
                  handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
