import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'
import { useGetProducts } from '../../hook/product/useGetProduct'

const AdminAllProducts = ({response,isLoading}) => {
  
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
                {
                  isLoading ===false && response && response.data ? response.data.data.map(prod=>{
                    return (
                      <AdminAllProductsCard id={prod._id} key={prod._id} image={prod.imageCover} title={prod.title} rating={prod.ratingsQuantity} price={prod.price} />
                    )
                  }) : <h4>There are no items</h4>
                }
                
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
