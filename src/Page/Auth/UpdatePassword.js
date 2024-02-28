import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import useUpdatePassword from '../../hook/auth/useUpdatePassword'

export default function UpdatePassword() {
  const [password,handleConfirmPassword,confirmPassword,handlePassword,handleSubmit]= useUpdatePassword();
  return (
    <Container style={{ minHeight: "680px" }}>
      <ToastContainer />
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login"> ادخال كلمة السر الجديدة</label>
          <input
            placeholder="ادخل كلمة السر..."
            type="text"
            className="user-input my-3 text-center mx-auto"
            value={password}
            onChange={handlePassword}
          />
          <input
            placeholder=" كلمه السر.الجديدة.."
            type="password"
            className="user-input text-center mx-auto"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          <button className="btn-login mx-auto mt-4" onClick={handleSubmit}>تأكيد</button>
          </Col>
          </Row>
          </Container>
  )
}
