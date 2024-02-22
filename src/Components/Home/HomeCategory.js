import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useGetAllCategories } from '../../hook/category/useGetAllCategories';
import { allCategories } from '../../redux/actions/category';
import SubTiltle from '../Uitily/SubTiltle';
import CategoryCard from './../Category/CategoryCard';

const HomeCategory = () => {
  const colors = ["#0034FF", "#F4DBA4", "#FF6262","#55cfdf","#ffd3e8","#ffd3e8"];
  const randomNum =Math.floor(Math.random() * 6);
  const [responseData, isLoading] = useGetAllCategories(allCategories());
  
  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className='my-2 d-flex justify-content-between'>
        {isLoading === false && responseData.data ? responseData.data.slice(0,5).map(res=>{
          return (
            <CategoryCard key={res._id} title={res.name} img={res.image} background={colors[randomNum]} />
          )
        }) : (<Spinner variant='primary' animation='border' />)}

      </Row>
    </Container>
  )
}

export default HomeCategory
