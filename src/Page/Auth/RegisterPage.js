import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useRegister from '../../hook/auth/useRegister'
import { ToastContainer } from 'react-toastify'

const RegisterPage = () => {
  const [name,handleName,email,handleEmail,password,handlePassword,confirmPassword,handleConfirmPassword,phone,handlePhone,handleSubmit] = useRegister();
    return (
        <Container style={{ minHeight: "680px" }}>
          <ToastContainer/>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
              placeholder="اسم المستخدم..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
              value={name}
              onChange={handleName}
            />
            <input
              placeholder="الايميل..."
              type="email"
              className="user-input my-3 text-center mx-auto"
              value={email}
              onChange={handleEmail}
            />
            <input
              placeholder="التلفون..."
              type="phone"
              className="user-input mb-3 text-center mx-auto"
              value={phone}
              onChange={handlePhone}
            />
            <input
              placeholder="كلمه السر..."
              type="password"
              className="user-input mb-3 text-center mx-auto"
              value={password}
              onChange={handlePassword}
            />
            <input
              placeholder="تأكيد كلمة السر"
              type="password"
              className="user-input text-center mx-auto"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
            <button className="btn-login mx-auto mt-4" onClick={handleSubmit}>تسجيل الحساب</button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    )
}

export default RegisterPage
