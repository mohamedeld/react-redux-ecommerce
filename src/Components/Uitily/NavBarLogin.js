import React, { useEffect, useState } from 'react'
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import useSearchNav from '../../hook/search/useSearchNav'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../redux/actions/auth'
const NavBarLogin = () => {
  const dispatch = useDispatch();
  
  const [search, handleSearch] = useSearchNav();
  const [user,setUser] = useState('');
  const [loading,setLoading] = useState(true);
  async function getUser(){
    setLoading(true);
    await dispatch(getMe());
    setLoading(false);
  }
  useEffect(()=>{
    getUser();
  },[]);
  const res = useSelector(state=> state.allAuths.currentUser);
  useEffect(()=>{
    if(res){
      if(res.data){
        setUser(res.data.data);
        // window.location.reload(false)
      }
    }
  },[res]);
  function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser('');
  }
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href='/'>
            <img src={logo} className='logo' />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {
              loading ===false && user ? 
              
              <NavDropdown className="nav-text d-flex mt-3 justify-content-center" title={user.name} id="basic-nav-dropdown">
             {
              user.role.toLowerCase() === "admin"?<NavDropdown.Item href="/admin/allproducts">
              لوحة التحكم
            </NavDropdown.Item> :
              <NavDropdown.Item href="/user/profile">
                الصفحة الشخصية
              </NavDropdown.Item>}
              
              <NavDropdown.Item  onClick={logout}>
              
                تسجيل الخروج
              </NavDropdown.Item>
            </NavDropdown>
              :
                <Nav.Link href='/login'
                  className="nav-text d-flex mt-3 justify-content-center">
                  <img src={login} className="login-img" alt="sfvs" />
                  <p style={{ color: "white" }}>دخول</p>
                </Nav.Link>}
            <Nav.Link href='/cart'
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}>
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarLogin
