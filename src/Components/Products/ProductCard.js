import React, { useEffect, useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";

import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToWhishlist, removeProductFromWhishlist } from '../../redux/actions/wishlist';
import { ToastContainer, toast } from 'react-toastify';
const ProductCard = ({ productName, productPrice, productImgCover, rating, id }) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  const [isFav, setIsFav] = useState(false);
  function handleIsFav() {
    setIsFav(!isFav);
  }
  
  const res = useSelector(state => state.allWhistlist.addWhistList);
  const response = useSelector(state=> state?.allWhistlist?.deleteFromWishList)
  async function handleSubmit() {
    try{
      await dispatch(addProductToWhishlist({
        productId:id
      }));
        toast.success("item added successfully to wishlist");
        setFavImg(favon);
      
    }catch(error){
      console.log(error)
      toast.error(error?.response?.data?.message);
      
    }
  }
  const handleDelete = async()=>{
    try{  
      await dispatch(removeProductFromWhishlist(id))
      if(response?.status === 200){
        toast.success("product removed from whishlist");
        setFavImg(favoff);
      }
    }catch(error){
      console.log(error);
      toast.error(error?.message);
      toast.error(error?.response?.data?.message);
    }
  }
  useEffect(() => {
    if (isFav === false) {
      handleDelete();
    } else {
      handleSubmit();
    }
  }, [isFav]);
  
  // const response = useSelector(state=> state.allWhistlist.deleteFromWishList);

  // async function handleDelete(){
  //   await dispatch(removeProductFromWhishlist(id));
  //   if(response && response.status === 200){
  //     toast.success("item deleted successfully");
  //   }
    
  // }
  
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <ToastContainer/>
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}>
        <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={productImgCover} />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favImg}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
              cursor: 'pointer'
            }}
            onClick={handleIsFav}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              {productName}
            </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                {/* <img
                                    className=""
                                    src={favImg}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                    
                                    style={{
                                      cursor:'pointer'
                                    }}
                                /> */}
                <div className="card-rate mx-2">{rating}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">{productPrice}</div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard
