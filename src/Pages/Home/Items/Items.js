import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import LunchItems from './Lunch/LunchItems';
import Dinners from './Dinner/Dinners';
import Breakfasts from './Breakfast/Breakfasts';
import './Items.css'


const Items = () => {
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch('Items.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <div>
            <Tabs defaultActiveKey="breakfast" id="uncontrolled-tab-example" className="mb-3 d-flex justify-content-center">
                <Tab eventKey="lunch" title="Lunch">
                    <LunchItems></LunchItems>
                </Tab>
                <Tab eventKey="breakfast" title="Breakfast">
                    <Breakfasts></Breakfasts>
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                    <Dinners></Dinners>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Items;