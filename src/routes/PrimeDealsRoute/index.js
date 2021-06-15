import {Component} from "react"
import Cookies from 'js-cookie'

import PrimeDealsSection from '../../components/PrimeDealsSection'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

  
class PrimeDealsRoute extends Component {

    state = {
        primeDeals: [],
        apiStatus: apiStatusConstants.initial,
    }

    componentDidMount() {
        this.getPrimeDeals()
    }

    getPrimeDeals = async () => {
        this.setState({
          apiStatus: apiStatusConstants.inProgress,
        })
    
        const jwtToken = Cookies.get('jwt_token')
    
        const apiUrl = 'https://apis.ccbp.in/prime-deals'
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        if (response.ok === true) {
          const fetchedData = await response.json()
          const updatedData = fetchedData.prime_deals.map(product => ({
            title: product.title,
            brand: product.brand,
            price: product.price,
            id: product.id,
            imageUrl: product.image_url,
            rating: product.rating,
          }))
          this.setState({
            primeDeals: updatedData,
            apiStatus: apiStatusConstants.success,
          })
        }
        if (response.status === 401) {
          this.setState({
            apiStatus: apiStatusConstants.failure,
          })
        }
      }    
      render () {
        const {primeDeals,apiStatus} = this.state
          return (<>
          <PrimeDealsSection 
          primeDeals = {primeDeals}
          apiStatus = {apiStatus}
          apiStatusConstants = {apiStatusConstants}
          />
          </>)
      }
}

export default PrimeDealsRoute