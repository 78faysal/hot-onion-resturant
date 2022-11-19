import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LunchItem from './LunchItem';

const LunchItems = () => {
    const [lunchs, setLunch] = useState([]);

    useEffect(() => {
        fetch('Lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])
    return (
        <Row xs={1} md={3} className="g-5 mx-5">
            {
                lunchs.map(lunch => <LunchItem
                    key={lunch.id}
                    item={lunch}
                ></LunchItem>)
            }
        </Row>
    );
};

export default LunchItems;