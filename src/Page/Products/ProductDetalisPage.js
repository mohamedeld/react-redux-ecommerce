import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import useGetSpecificProduct from '../../hook/product/useGetSpecificProduct'
import { useParams } from 'react-router-dom'

const ProductDetalisPage = () => {
  const {id} = useParams();
  const [item,cat,brand,productsLike] = useGetSpecificProduct(id);
  let response = [];
  if(productsLike){
    response = productsLike;
  }else{
    response = [];
  }

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer />
                <CardProductsContainer response={response} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
