import { get } from "./common"

export const getProducts = async (search) => {
  const searchParams = new URLSearchParams(search)
  const query = searchParams.toString()

  const products = await get(`http://makeup-api.herokuapp.com/api/v1/products.json${query ? `?${query}` : ''}`)

  return products
}