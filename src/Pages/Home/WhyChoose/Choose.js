import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Chooses.css'

const Choose = (props) => {
    const { img, description, title } = props.items
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card className='choose-section'>
                        <Card.Img className='img-fluid' variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
};

export default Choose;