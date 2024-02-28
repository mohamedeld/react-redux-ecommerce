import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { forgetPassword } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';
import useForgetPassword from '../../hook/auth/useForgetPassword';

export default function ForgetPasswordPage() {
  const [email,handleEmail,handleSubmit] = useForgetPassword();
  return (
    <Container style={{ minHeight: "680px" }}>
      <ToastContainer/>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> نسيت كلمة السر</label>
          <input
            placeholder="الايميل..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={email}
            onChange={handleEmail}
          />
          <button className="btn-login mx-auto mt-4" onClick={handleSubmit}> ارسال</button>
        </Col>
      </Row>
    </Container>

  )
}
