import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ProductGroup from './ProductGroup'
import Totalizer from './Totalizer'
import ButtonGroup from './ButtonGroup'

const AddToCartInfo = () => {
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizer
  } } = useOrderForm()
  console.log('producto por aca: ', productInfo)
  console.log('orderForm por aca: ', items, totalizer)
  return (
    <>
      <ProductGroup /> {/*listado de productos*/}
      <Totalizer />   { /*valor total*/}
      <ButtonGroup />  {/*acciones*/}
    </>
  )
}

export default AddToCartInfo