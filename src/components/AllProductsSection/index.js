import Loader from 'react-loader-spinner'

import { sortbyOptions } from '../../constants/DataConstants'
import ProductCard from '../common/ProductCard'
import ProductsHeader from '../ProductsHeader'
import './index.css'


const AllProductsSection = (props) => {


  const renderProductsList = () => {
    const {productsList, activeOptionId, updateActiveOptionId} = props
    return (
      <>
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          updateActiveOptionId={updateActiveOptionId}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </>
    )
  }

  const renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )
    return props.isLoading ? renderLoader() : renderProductsList()
}

export default AllProductsSection
