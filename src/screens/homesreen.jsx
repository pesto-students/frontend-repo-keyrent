
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Products from '../products';
import Pagination from '../components/pagination';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
 
  return (
    <>
          <h1>Latest Products</h1>
          <span className='grid grid-cols-4 '>
       <Row className='grid grid-cols-subgrid col-span-3'>   
        {Products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
    
        
          <Pagination/>
          </Row>
          </span>
        </>
  )
}

export default HomeScreen