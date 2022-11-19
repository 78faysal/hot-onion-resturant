import React from 'react';
import { Badge, Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import img from '../../../Images/bannerbackground.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Card style={{ border: 'none' }} className="text-black">
                <Card.Img className='img-fluid' src={img} alt="Card image" />
                <Card.ImgOverlay className=''>
                    <div className='banner-tittle text-center'>
                        <Card.Title className='fw-bold fs-2 mb-3'>BEST FOOD WAITING FOR YOU BALLY</Card.Title>
                        <InputGroup>
                            <Badge className='d-flex mx-auto' pill bg="white">
                                <FormControl
                                    style={{ width: '80%', border: 'none' }}
                                    placeholder="Search Food Item"
                                    aria-label="Search Food Item"
                                    aria-describedby="basic-addon2"
                                />
                                <Badge pill bg="danger">
                                    <Button variant="" id="button-addon2">
                                        Button
                                    </Button>
                                </Badge>{' '}
                            </Badge>{' '}

                        </InputGroup>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;