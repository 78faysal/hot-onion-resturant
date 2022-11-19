import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, Redirect, Route, useParams } from 'react-router-dom';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import './ItemDetails.css';

const ItemDetails = () => {
    const { itemId } = useParams();

    const [selectedItem, setSelectedItem] = useState({});


    const intItemId = parseInt(itemId);
    useEffect(() => {
        fetch('/Breakfast.json')
            .then(res => res.json())
            .then(data => {
                const item = data.find(product => product.id === parseInt(itemId))
                if (item?.id) {
                    setSelectedItem(item)
                }
            })
    }, [itemId]);

    useEffect(() => {
        fetch('/Lunch.json')
            .then(res => res.json())
            .then(data => {
                const item = data.find(product => product.id === intItemId)
                if (item) {
                    setSelectedItem(item)
                }

            })
    }, [intItemId])

    useEffect(() => {
        fetch('/Dinner.json')
            .then(res => res.json())
            .then(data => {
                const item = data.find(product => product.id === intItemId)
                if (item?.id) {
                    setSelectedItem(item)
                }

            })
    }, [intItemId])

    // const handleBuyNowBtn = () => {
    //     <PlaceOrder
    //         key={selectedItem?.id}
    //         selectedItemData={selectedItem}
    //     ></PlaceOrder>
    // }

    return (
        <div className='details-section'>
            <Container className='m-2 p-5 mx-auto '>
                <Row>
                    <Col className='my-auto' sm={6}>
                        <div>
                            <h1>{selectedItem?.title}</h1>
                            <p>{selectedItem?.description}</p>
                            <div className='d-flex align-items-center mb-3'>
                                <h1>${selectedItem?.price}</h1>
                                <div className='in-de-btn'>
                                    <span type="button">- </span>
                                    <span className='value'>1</span>
                                    <span type="button"> +</span>
                                </div>
                            </div>
                            <Route path="/">
                                {selectedItem.id ?
                                    <PlaceOrder
                                        key={selectedItem.id}
                                        selectedItemData={selectedItem}
                                    ></PlaceOrder> : <Redirect to="/login" />
                                }
                            </Route>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div>
                            <img className='itemDetail-img' src={selectedItem?.img} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default ItemDetails;