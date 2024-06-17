import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaSnapchat } from "react-icons/fa";
export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between border-bottom'>
        <div>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </Link>
          <Link href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </Link>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <img src= {logo} width={150} height={120}/>
              <p className='pt-3'>
                Helping your Rentals.
              </p>
              
                <Link><FaFacebook className='mx-1'size={20} /></Link> 
                <Link><FaInstagram className='mx-1' color='red' size={20} /></Link> 
                <Link><FaWhatsapp className='mx-1' color='green' size={20} /></Link> 
                <Link><FaSnapchat className='mx-1' color='yellow' size={20}/></Link> 
                <Link><FaTwitter className='mx-1' color='black' size={20}/></Link> 
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <Link href='#!' className='text-reset'>
                  Pg's
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Flats
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Double Sharing
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Single Sharing
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link href='#!' className='text-reset'>
                  Pricing
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Services
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Orders
                </Link>
              </p>
              <p>
                <Link href='#!' className='text-reset'>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className='mx-auto mb-md-0 mb-4' />
                Pune, IN 411057, IN
              </p>
              <p>
                <MDBIcon icon="envelope" className='mx-auto mb-md-0 mb-4' />
                KeyRent@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className='mx-auto mb-md-0 mb-4' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className='mx-auto mb-md-0 mb-4' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#7B8A8B' }}>
        © 2024 Copyright:
        <Link className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          KeyRent.com
        </Link>
      </div>
    </MDBFooter>
  );
}