import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import deleteImg from '../../images/delete.png';
import editImg from "../../images/edit-image.png"
import useModal from '../../utils/useModal';
import Modals from '../../utils/Modals';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../redux/actions/review';
import { toast } from 'react-toastify';
import useDeleteReview from '../../hook/review/useDeleteReview';
import UpdateModal from '../../utils/UpdateModal';
import useUpdateReview from '../../hook/review/useUpdateReview';
import useEditModal from '../../utils/useEditModal';
const RateItem = ({name,rateText,rateValue,user,id}) => {
  
  const [isUser,handleDelete,show,handleClose,handleShow] = useDeleteReview(user,id);
    const [showEdit,handleCloseEdit,handleShowEdit] = useEditModal();
    const [review,editLoading,handleEditSubmit,handleSetRating,handleNewRateValue,rateStar,newRateValue] = useUpdateReview(id)
    
    
    return (
        <div>
          <Modals handleDelete={handleDelete} show={show} handleClose={handleClose}/>
          <UpdateModal editLoading={editLoading} handle showEdit={showEdit} handleEditSubmit={handleEditSubmit} handleCloseEdit={handleCloseEdit} handleNewRateValue={handleNewRateValue} rateStar={rateStar} newRateValue={newRateValue} handleSetRating={handleSetRating}/>
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
                   {isUser? <div>
                      <img src={deleteImg}  alt="icon for delete image" onClick={handleShow} width="20px" height={"20px"} style={{cursor:'pointer'}}/>
                      <img src={editImg}  alt="icon for update image" onClick={handleShowEdit} width="20px" height={"20px"} style={{cursor:'pointer'}}/>
                    </div>: null }
                </Col>
            </Row>
        </div>
    )
}

export default RateItem
