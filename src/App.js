import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import LogIn from './Pages/Login/LogIn';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/items/:itemId">
              <ItemDetails></ItemDetails>
            </Route>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            <Route path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
