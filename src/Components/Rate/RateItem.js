import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import deleteImg from '../../images/delete.png';
import editImg from "../../images/edit-image.png"
import useModal from '../../utils/useModal';
import Modals from '../../utils/Modals';
import { useDispatch } from 'react-redux';
import { DELETE_REVIEW } from '../../redux/type';
const RateItem = ({name,rateText,rateValue,user,id}) => {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);
  const [show,handleClose,handleShow] = useModal();
  let loggedUser="";
  if(localStorage.getItem("user") !== null){
    loggedUser = JSON.parse(localStorage.getItem("user"));
  }
  
  async function handleDelete(){
    
    setLoading(true);
    await dispatch(DELETE_REVIEW(id));
     setLoading(false);
   handleClose();
  }
  function handleEdit(){

  }
  
    return (
        <div>
          <Modals handleDelete={handleDelete} show={show} handleClose={handleClose}/>
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2">{name}</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateValue}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-flex justify-content-between align-items-center me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                        {rateText}
                    </div>
                   {user && loggedUser ? user._id === loggedUser._id? <div>
                      <img src={deleteImg}  alt="icon for delete image" onClick={handleShow} width="20px" height={"20px"} style={{cursor:'pointer'}}/>
                      <img src={editImg}  alt="icon for update image" onClick={()=>handleEdit()} width="20px" height={"20px"} style={{cursor:'pointer'}}/>
                    </div>: null : null}
                </Col>
            </Row>
        </div>
    )
}

export default RateItem
