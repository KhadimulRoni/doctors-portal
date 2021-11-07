import './App.css';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/appointment">
                  <Appointment />
               </Route>
               <Route path="/home">
                  <Home />
               </Route>
               <Route path="/login">
                  <Login />
               </Route>
               <Route path="/register">
                  <Register />
               </Route>
               <Route exact path="/">
                  <Home />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
