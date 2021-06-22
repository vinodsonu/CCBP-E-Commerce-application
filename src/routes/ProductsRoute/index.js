import {Component} from "react"

import PrimeDealsSection from '../../components/PrimeDealsSection'
import AllProductsSection from '../../components/AllProductsSection'
import {sortbyOptions,apiStatusConstants} from '../../constants/DataConstants'
import {getPrimeDealsData,getSortedProducts} from '../../utils/ApiUtils'

class ProductsRoute extends Component {

    state = {
        productsList: [],
        isLoading: false,
        primeDeals: [],
        apiStatus: apiStatusConstants.initial,
        activeOptionId: sortbyOptions[0].optionId,
      }

      componentDidMount() {
        this.getPrimeDeals()
        this.getProducts()
      }

      getPrimeDeals = async () => {
        this.setState({
          apiStatus: apiStatusConstants.inProgress,
        })
        const response = await getPrimeDealsData()
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

      getProducts = async () => {
        this.setState({
          isLoading: true,
        })
        const {activeOptionId} = this.state
        const response = await getSortedProducts(activeOptionId)
        if (response.ok) {
          const fetchedData = await response.json()
          const updatedData = fetchedData.products.map(product => ({
            title: product.title,
            brand: product.brand,
            price: product.price,
            id: product.id,
            imageUrl: product.image_url,
            rating: product.rating,
          }))
          this.setState({
            productsList: updatedData,
            isLoading: false,
          })
        }
      }
      updateActiveOptionId = activeOptionId => {
        this.setState({activeOptionId}, this.getProducts)
      }
    
    render() {
        const {productsList, isLoading, activeOptionId,primeDeals,apiStatus} = this.state
        return (
          <>
          <PrimeDealsSection 
          primeDeals = {primeDeals}
          apiStatus = {apiStatus}
          apiStatusConstants = {apiStatusConstants}
          />
            <AllProductsSection
            productsList = {productsList}
            isLoading = {isLoading}
            activeOptionId = {activeOptionId}
            updateActiveOptionId = {this.updateActiveOptionId}
             />
        </>
        )
    }

}

export default ProductsRoute





  
