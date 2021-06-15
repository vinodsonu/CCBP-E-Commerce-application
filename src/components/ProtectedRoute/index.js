import {Redirect, Route} from 'react-router-dom'

import { LOGIN_PATH } from '../../constants/RouteConstants'
import {getCookie} from '../../utils/StorageUtils'

const ProtectedRoute = props => {
  const token = getCookie()
  if (token === undefined) {
    return <Redirect to={LOGIN_PATH} />
  }
  return <Route {...props} />
}

export default ProtectedRoute
