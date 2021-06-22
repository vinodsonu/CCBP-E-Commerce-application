import Loader from 'react-loader-spinner'

import ProductCard from '../common/ProductCard'
import './index.css'


const PrimeDealsSection = (props) => {

  const renderPrimeDealsList = () => {
    const {primeDeals} = props
    return (
      <div>
        <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
        <ul className="products-list">
          {primeDeals.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  const renderPrimeDealsFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="Register Prime"
      className="register-prime-image"
    />
  )

  const renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  const renderPrimeDeals = () => {
    const {apiStatus, apiStatusConstants} = props
    switch(apiStatus){
      case apiStatusConstants.success:
        return renderPrimeDealsList()
      case apiStatusConstants.failure:
        return renderPrimeDealsFailureView()
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      default:
        return null
    }
  }

  return (
    renderPrimeDeals()
  )
}

export default PrimeDealsSection


