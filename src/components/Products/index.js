import PrimeDealsRoute from '../../routes/PrimeDealsRoute'
import AllProductsRoute from '../../routes/AllProductsRoute'

import Header from '../common/Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <PrimeDealsRoute />
      <AllProductsRoute />
    </div>
  </>
)

export default Products
