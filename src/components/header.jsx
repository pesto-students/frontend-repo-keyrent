import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import logo from '../assets/logo.png'
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      
  
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className='py-0 my-0'>
      <Navbar style={{ backgroundColor: '#7B8A8B' }} bgcolor='dark' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img className= 'my=0' src={logo} width={120} height={120} alt='ProShop' />
            </Navbar.Brand> 
          </LinkContainer>
          <LinkContainer to='/'>
           <Nav.Link className='p-4 text-white font-bold'>
             Home
           </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/'>
           <Nav.Link className='p-4 text-white font-bold'>
            Products
           </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/'>
           <Nav.Link className='p-4 text-white font-bold'>
            Services
           </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/'>
           <Nav.Link  className='p-4 text-white font-bold'>
            About Us
           </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/'>
           <Nav.Link  className='p-4 text-white font-bold'>
            Contact Us
           </Nav.Link>
          </LinkContainer>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link  className='p-4 text-white font-bold'>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link className=' p-4 text-white font-bold'>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
