import React, { useEffect, useState } from 'react'
import { Container,Row,Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getAllProductWishlists } from '../../redux/actions/wishlist'

const CardProductsContainer = ({isLoading,title ,btntitle,pathText,response}) => {
  const [loading,setLoading] = useState(true);  
  const [favouriteProducts,setFavouriteProducts] = useState([]);
  const dispatch = useDispatch();
    const handleGetWishList = async()=>{
      try{
        await dispatch(getAllProductWishlists());
        setLoading(false)
      }catch(error){
        console.log(error?.message);
        toast.error(error?.message);
        setLoading(false)
      }
    }
    useEffect(()=>{
      handleGetWishList();
    },[])
    const res = useSelector(state=> state?.allWhistlist?.allWishlists);
    useEffect(()=>{
      if(loading === false){
        if(res?.status === 200){
          setFavouriteProducts(res?.data?.data?.map(item=> item?._id));
        }
      }
    },[loading])
    
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText={pathText}/>
            <Row className='my-2 d-flex justify-content-between'>
               {
                response && response.data ? (
                  response.data.data.map(res=>{
                    
                    return (
                      <ProductCard productName={res.title} productPrice={res.price} key={res._id} productImgCover={res.imageCover} rating={res.ratingsQuantity} id={res._id} favouriteProducts={favouriteProducts}/>
                    )
                  })
                ):<Spinner variant="primary"animation="border" />
               }
                
               
            </Row>
        </Container>
    )
}

export default CardProductsContainer
