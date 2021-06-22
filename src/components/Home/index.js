import {Link} from 'react-router-dom'

import Header from '../common/Header'
import Button from '../common/Button'
import {PRODUCTS_PATH} from '../../constants/RouteConstants'
import { getCookie } from '../../utils/StorageUtils'
import './index.css'

const Home = () => {
  const jwtToken = getCookie()
  if (jwtToken === undefined) {    
    <Redirect to={LOGIN_PATH}/>
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="dresses to be noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>

          <Link to={PRODUCTS_PATH}>
            <Button type = "button" className = "shop-now-button" buttonText = "Shop Now"/>
          </Link>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="dresses to be noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
