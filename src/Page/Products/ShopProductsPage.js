import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import SideFilter from '../../Components/Uitily/SideFilter'
import { useGetProduct } from '../../hook/product/useGetProduct'

const ShopProductsPage = () => {
  const [response, pageCount, getPage,isLoading,handleProd] = useGetProduct();
 
   
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult onClick={handleProd} title={ isLoading === false && response && response.data.data.length > 0  ? `نتيجة بحث ${response.data.data.length}`:`نتيجة بحث 0`} />
        <Row className='d-flex flex-row'>
          <Col sm="2" xs="2" md="1" className='d-flex'>
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer isLoading={isLoading} response={response} title="" btntitle="" />
          </Col>
        </Row>
        {
          pageCount > 1 ?
            <Pagination pageCount={pageCount} getPage={getPage} /> : null}
      </Container>
    </div>
  )
}

export default ShopProductsPage
