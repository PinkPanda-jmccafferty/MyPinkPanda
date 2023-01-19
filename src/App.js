// Imports
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
// Pages 
import Home from './Pages/index/Home'
import Dashboard from './Pages/dashboard/Dashboard'
import FAQs from './Pages/FAQs/FAQs'
import ProductDetails from './Pages/productDetails/ProductDetails'
import Shop from './Pages/shopall/Shop'
import Wip from './Pages/wip/Wip'
// & Components
import Navbar from './components/Navbar'

// Styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar/>
          <Switch>
            <Route exact path ="/">
              <Home/>
            </Route>
            <Route path ="/dashboard">
              <Dashboard/>
            </Route>
            <Route path ="/FAQs">
              <FAQs/>
            </Route>
            <Route path ="/details/:id">
              <ProductDetails/>
            </Route>
            <Route path ="/shop">
              <Shop/>
            </Route>
            <Route path ="/wip">
              <Wip/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
