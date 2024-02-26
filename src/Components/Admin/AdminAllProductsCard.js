import React, { useEffect, useState } from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
import useModal from '../../utils/useModal'
import Modals from '../../utils/Modals'
import { useDispatch } from 'react-redux'
import { deleteProductById } from '../../redux/actions/product'
import { ToastContainer, toast } from 'react-toastify'
const AdminAllProductsCard = ({image,rating,id,title,price}) => {
  const dispatch = useDispatch();
  const [isDeleted,setIsDeleted] = useState(false);
  
  const [show,handleClose,handleShow] = useModal();
  
    async function handleDelete(){
      setIsDeleted(false);
      await dispatch(deleteProductById(id));
      setIsDeleted(true);
      handleClose();
    }
    
    
    return (
      <>
      <Modals handleDelete={handleDelete} show={show} handleClose={handleClose}/> 
      
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
          
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit" onClick={handleShow}>ازاله</div>
                        <Link to={`/admin/editproduct/${id}`} style={{ textDecoration: "none" }}>
                        <div className="d-inline item-delete-edit">تعديل</div>

                        </Link>
                    </Col>
                </Row>
                <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={image} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {title}{" "}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{rating}</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">جنيه</div>
                                    <div className="card-price">{price}</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
        </>
    )
}

export default AdminAllProductsCard

