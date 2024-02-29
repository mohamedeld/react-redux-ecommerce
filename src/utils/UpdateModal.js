import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateReviewById } from '../redux/actions/review';
export default function UpdateModal({handleNewRateValue,showEdit,handleCloseEdit,handleEditSubmit,handleSetRating,rateStar,newRateValue}) {
  
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      handleSetRating(newValue);
    }
  }
  
  return (
    <Modal show={showEdit} onHide={handleCloseEdit}>
    <Modal.Header closeButton>
      <Modal.Title>Update Review</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ReactStars {...setting}/>
      <input type="text" value={newRateValue} onChange={handleNewRateValue} style={{border:'none'}}/>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseEdit}>
        Close
      </Button>
      <Button variant="success" onClick={handleEditSubmit}>
        update
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
