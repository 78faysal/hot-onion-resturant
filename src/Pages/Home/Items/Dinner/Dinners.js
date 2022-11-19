import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Dinner from './Dinner';

const Dinners = () => {
    const [dinners, setDinner] = useState([]);

    useEffect(() => {
        fetch('Dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data))
    }, [])
    return (
        <Row xs={1} md={3} className="g-5 mx-5">
            {
                dinners.map(dinner => <Dinner
                    key={dinner.id}
                    items={dinner}
                ></Dinner>)
            }
        </Row>
    );
};

export default Dinners;