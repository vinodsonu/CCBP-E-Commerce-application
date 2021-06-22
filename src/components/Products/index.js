import ProductsRoute from '../../routes/ProductsRoute'

import Header from '../common/Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <ProductsRoute />
    </div>
  </>
)

export default Products
