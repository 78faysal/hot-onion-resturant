import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Breakfast.css';

const Breakfast = (props) => {
    const { id, img, title, description, price } = props.items;
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card className='breakfast-section'>
                        <Card.Img className='img-fluid' variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>${price}</Card.Text>
                            <Card.Text>{description}</Card.Text>
                            <Link to={`/items/${id}`}>
                                <Button variant="danger">See Details</Button>{' '}
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </div>
    );
};

export default Breakfast;