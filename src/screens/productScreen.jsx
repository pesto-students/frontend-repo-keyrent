import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Form, Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import {addToCart} from '../slices/cartSlice';
import Rating from "../components/rating";
import Products from '../products';

const ProductScreen = () => {
    const [qty, setQty] = useState(1);
   const {id: productId} = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const product = Products.find((p)=>p._id===productId);
   const addToCartHandler = () => {
    dispatch(addToCart({
      ...product, qty
    }));
    navigate('/cart');
      }
        return (
        <>
        <Link className="btn btn-light my-3" to="/">Go Back</Link>
        <Row>
            <Col md={6}>
             <Image src={product.image} alt= {product.name}>
                    </Image>
                    </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                    <h3>
                        {product.name}
                    </h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                   <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}>
                    </Rating>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroupItem>
                        Description: {product.description}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={2}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                </Col>
                                <Col>
                                <strong>
                                    ${product.price}
                                </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                </Col>
                                <Col>
                                <strong>
                                    ${product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Qty
                                    </Col>
                                    <Col>
                                    <Form.Control
                                    as= 'select'
                                    value={qty}
                                    onChange={(e) => setQty(Number(e.target.value))}
                                    >
                                        {[...Array(product.countInStock).keys()].map((x)=>(
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))}
                                    </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                        }
                        <ListGroupItem>
                            <Button
                             className="btn-block"
                             type="button"
                             disabled ={product.countInstock === 0}
                             onClick={addToCartHandler}
                            >
                                Add To Cart
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
  
  )
}

export default ProductScreen