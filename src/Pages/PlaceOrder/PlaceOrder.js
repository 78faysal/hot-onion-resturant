import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './PlaceOrder.css';

const PlaceOrder = (props) => {
    const {title, price, img} = props;
    console.log(title, price);
    return (
        <Row className='container m-5 text-start mx-auto'>
            <Col>
                <h2 className='mx-auto'>Delivery Details</h2>
                <hr className='mb-5' />
                <Form>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter Your Name" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Number</Form.Label>
                            <Form.Control placeholder="Enter number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Bangla Bazar</option>
                                <option>Chowmuhani</option>
                                <option>Sadar</option>
                                <option>EklasPur</option>
                                <option>Senbug</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>



            <Col className=' p-3 pricing-details'>
                <p className='mb-2'>From <span className='fw-bold'>Noakhali Plaza Resturents NPR</span></p>
                <p className='mb-2'>Ariving in 30 min</p>
                <p className='mb-2'>Chowrasta Road</p>
                <div>
                    <img src={img} alt="" />
                </div>

                <p className='mb-2'>Subtotal <span>$</span></p>
                <p className='mb-2'>Tax   <span>$</span></p>
                <p className='mb-2'>Delivery Fee   <span>$</span></p>
                <p className='mb-2'>Total   <span>$</span></p>
            </Col>
        </Row>
    );
};

export default PlaceOrder;