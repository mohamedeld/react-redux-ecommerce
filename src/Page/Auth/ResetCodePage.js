import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'
import { resendCode } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
import useResetCode from '../../hook/auth/useResetCode';

export default function ResetCodePage() {
  const [resetCode,handleResetCode,handleSubmit]= useResetCode();
  return (
    <Container style={{ minHeight: "680px" }}>
      <ToastContainer/>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> ادخال  التفعيل</label>
          <input
            placeholder="كود التفعيل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={resetCode}
            onChange={handleResetCode}
          />
          <button className="btn-login mx-auto mt-4" onClick={handleSubmit}> التحقق</button>
        </Col>
      </Row>
    </Container>
  )
}
