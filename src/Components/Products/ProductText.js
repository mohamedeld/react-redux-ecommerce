import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useGetSpecificProduct from '../../hook/product/useGetSpecificProduct';
import { useDispatch } from 'react-redux';

const ProductText = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const [item,cat,brand] = useGetSpecificProduct(id);
  
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">{cat ? cat : 'التصنيف'} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
          {item.title}<div className="cat-rate d-inline mx-3">{item.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand ? brand :''} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
         { item && item.availableColors ? item.availableColors.map((color,index)=>{
          return (
<div key={index}
            className="color ms-2 border"
            style={{ backgroundColor: color }}></div>
          )
         }) :
         <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}></div>
          }
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {item.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{item.price} جنية</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
