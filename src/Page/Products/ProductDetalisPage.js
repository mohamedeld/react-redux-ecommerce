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
  const [item,cat,brand,productsLike,loading] = useGetSpecificProduct(id);
  let response = [];
  if(productsLike){
    response = productsLike;
  }else{
    response = [];
  }
  
  let res=[];
  try{
    if(loading === false && item){
      res = item;
    }
  }catch(err){
    console.error(err)
  }
  let rateAvg=0;
  try{
    if(res){
      rateAvg = res.ratingsQuantity
    }
  }catch(err){
    console.log(err);
  }
  
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer rateAvg={rateAvg}/>
                <CardProductsContainer response={response} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
