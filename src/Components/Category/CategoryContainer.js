import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import CategoryCard from './../Category/CategoryCard';
const CategoryContainer = ({responseData,isLoading}) => {
  const colors = ["#0034FF", "#F4DBA4", "#FF6262", "#55cfdf", "#ffd3e8", "#ffd3e8"];
  const randomNum = Math.floor(Math.random() * 6);
  console.log(isLoading)
  return (
    <Container >
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className='my-2 d-flex justify-content-between'>
        {isLoading === false && responseData.data ?
          responseData.data.data.map(res => {
            return (
              <CategoryCard key={res._id} title={res.name} img={res.image} background={colors[randomNum]} />
            )
          })
          : (<Spinner variant='primary' animation='border' />)}

      </Row>
    </Container>
  )
}

export default CategoryContainer
