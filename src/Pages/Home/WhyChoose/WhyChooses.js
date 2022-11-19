import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Choose from './Choose';

const WhyChooses = () => {
    const [chooses, setChoose] = useState([]);

    useEffect(() => {
        fetch('ChooseUs.json')
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])
    return (
        <div className='mt-5'>
            <h1>Why Choose Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa obcaecati ducimus minima officiis quia animi dolore alias voluptas, nostrum aspernatur.</p>
            <Row xs={1} md={3} className="g-4 mx-5">
                {
                    chooses.map(choose => <Choose
                        key={choose.id}
                        items={choose}
                    ></Choose>)
                }
            </Row>
        </div >
    );
};

export default WhyChooses;