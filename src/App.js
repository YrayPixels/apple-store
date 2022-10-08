// import logo from "./logo.svg";
// import "./App.css";
import './main.min.css';
import './style.css';
import Navbar from "./components/Navbar";
import Footer from './components/footerComponents/Footer';
import Home from './components/bodyComponents/Home';
import Checkout from './components/checkoutComponent/Checkout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemView from './components/ItemDetailsComp/ItemView';
import Notfound from './components/NotfoundPage';
import Cart from './components/cartComponent/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar></Navbar>
        </div>

        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/item">
              <ItemView />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
