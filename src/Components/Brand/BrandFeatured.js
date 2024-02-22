import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import { useBrandData } from '../../hook/brands/useBrandData';

const BrandFeatured = ({ title, btntitle }) => {
  const [isLoading,responseData,pageCount,getPage] = useBrandData();
    return (
        <Container>
            <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
            <Row className='my-1 d-flex justify-content-between'>
            {
          isLoading === false && responseData.data ? (
            responseData.data.data.slice(0,5).map(res => {
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

export default BrandFeatured
