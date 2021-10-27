import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import Events from './components/Events/Events';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import VolunteerRegistration from './components/VolunteerRegistraition/VolunteerRegistration';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/events">
            <Events />
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/volunteer-registration/:activityId">
            <VolunteerRegistration />
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
