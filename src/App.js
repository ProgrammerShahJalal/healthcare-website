import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route to='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
