import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../Uitily/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import useGetReviews from '../../hook/review/useGetReviews';
import { useParams } from 'react-router-dom';
const RateContainer = ({rateAvg}) => {
    const {id} = useParams();
    const [reviews,loading,user,pageCount,getPage] = useGetReviews(id);
    
    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
                </Col>
            </Row>
            <RatePost />
            {loading === false && reviews ? reviews.data.map(rev=>{
              return(
                    <RateItem key={rev._id} name={user?user.name:'user'} rateText={rev.review} rateValue={rev.rating} user={rev.user} id={rev._id}/>
              )
            }):<h4>لا يوجد تعليقات بعد</h4>}
            {
              pageCount > 1? <Pagination pageCount={pageCount} getPage={getPage} /> : null
            }
            
        </Container>
    )
}

export default RateContainer
