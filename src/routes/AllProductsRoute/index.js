import {Component} from "react"
import Cookies from 'js-cookie'

import AllProductsSection from '../../components/AllProductsSection'

const sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: 'Price (High-Low)',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'Price (Low-High)',
    },
  ]

class AllProductsRoute extends Component {

    state = {
        productsList: [],
        isLoading: false,
        activeOptionId: sortbyOptions[0].optionId,
      }

      componentDidMount() {
        this.getProducts()
      }

      getProducts = async () => {
        this.setState({
          isLoading: true,
        })
        const jwtToken = Cookies.get('jwt_token')
        const {activeOptionId} = this.state
        const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
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
        const {productsList, isLoading, activeOptionId} = this.state
        return (
            <AllProductsSection
            productsList = {productsList}
            isLoading = {isLoading}
            activeOptionId = {activeOptionId}
            updateActiveOptionId = {this.updateActiveOptionId}
             />

        )
    }

}

export default AllProductsRoute