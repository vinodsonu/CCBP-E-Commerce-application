import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginRoute from './routes/LoginRoute'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import {LOGIN_PATH,
  HOME_PATH,
  PRODUCTS_PATH,
  CART_PATH,
  NOT_FOUND_PATH} from './constants/RouteConstants'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={LOGIN_PATH} component={LoginRoute} />
      <ProtectedRoute exact path={HOME_PATH} component={Home} />
      <ProtectedRoute exact path={PRODUCTS_PATH} component={Products} />
      <ProtectedRoute exact path={CART_PATH} component={Cart} />
      <Route path={NOT_FOUND_PATH} component={NotFound} />
      <Redirect to={NOT_FOUND_PATH} />
    </Switch>
  </BrowserRouter>
)

export default App
