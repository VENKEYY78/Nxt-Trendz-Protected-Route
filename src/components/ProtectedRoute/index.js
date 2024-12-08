import {Redirect, Route} from 'react-router-dom'

import Cookies from 'js-cookie'

// import Home from '../Home'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  //  const {history} = props
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
