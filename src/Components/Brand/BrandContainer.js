import React from 'react'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import { Container, Row, Spinner } from 'react-bootstrap';
import { useBrandData } from '../../hook/brands/useBrandData';
const BrandContainer = () => {
  const [isLoading, responseData, pageCount, getPage] = useBrandData();

  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل الماركات</div>
      <Row className='my-1 d-flex justify-content-between'>
        {
          isLoading === false && responseData ? (
            responseData.data.data.map(res => {
              return (
                <BrandCard img={res.image} key={res._id} />
              )
            })
          ) : <Spinner animation='border' variant="primary" />
        }



      </Row>
    </Container>
  )
}

export default BrandContainer
