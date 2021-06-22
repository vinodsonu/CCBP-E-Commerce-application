import Cookies from "js-cookie"
import { PrimeDealsUrl,LoginURl,sortedProductsUrl } from "../constants/UrlConstants"

export const getJwtToken = async (userDetails) => {
    const apiUrl = LoginURl
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl,options)
    return response
}

export const getPrimeDealsData = async () => {
    const jwtToken = Cookies.get('jwt_token')
        const apiUrl = PrimeDealsUrl
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
    const response = await fetch(apiUrl,options)
    return response
}

export const getSortedProducts = async (activeOptionId) => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `${sortedProductsUrl}${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl,options)
    return response
}