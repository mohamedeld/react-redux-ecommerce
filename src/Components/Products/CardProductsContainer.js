import React from 'react'
import { Container,Row,Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'

const CardProductsContainer = ({isLoading,title ,btntitle,pathText,response,productsLike}) => {
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>
            <Row className='my-2 d-flex justify-content-between'>
               {
                isLoading ===false && response && response.data ? (
                  response.data.data.map(res=>{
                    return (
                      <ProductCard productName={res.title} productPrice={res.price} key={res._id} productImgCover={res.imageCover} rating={res.ratingsQuantity} id={res._id}/>
                    )
                  })
                ):<Spinner variant="primary"animation="border" />
               }
                
               
            </Row>
        </Container>
    )
}

export default CardProductsContainer
