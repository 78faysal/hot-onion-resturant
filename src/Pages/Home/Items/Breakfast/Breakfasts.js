import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Breakfast from './Breakfast';

const Breakfasts = () => {
    const [breakfasts, setBreakfast] = useState([]);

    useEffect(() => {
        fetch('Breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfast(data))
    }, [])

    return (
        <Row xs={1} md={3} className="g-5 mx-5">
            {
                breakfasts.map(breakfast => <Breakfast
                    key={breakfast.id}
                    items={breakfast}
                ></Breakfast>)
            }
        </Row>

    );
};

export default Breakfasts;