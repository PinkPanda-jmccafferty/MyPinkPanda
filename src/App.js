// Imports
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// Pages 
import Home from './pages/index/Home'
import Dashboard from './pages/dashboard/Dashboard'
import FAQs from './pages/FAQs/FAQs'
import ProductDetails from './pages/productDetails/ProductDetails'
import Shop from './pages/shopall/Shop'
import Wip from './pages/wip/Wip'
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
