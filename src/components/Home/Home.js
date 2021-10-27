import React from 'react';
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import homeBackground from '../../images/home-bg.png';
import './Home.css';
import Activity from '../Activity/Activity';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-hollows-72216.herokuapp.com/activities')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className="home" style={{ backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) ), url(${homeBackground})` }}>
            <Header />
            <Container className="py-5">
                <h2 className="my-5 text-center">I GROW BY HELPING PEOPLE IN NEED.</h2>
                <div className="d-flex justify-content-center">
                    <Form inline>
                        <Row>
                            <Col sm={8} className="pe-0">
                                <FormControl type="text" placeholder="Search...." />
                            </Col>
                            <Col sm={4} className="ps-0">
                                <Button variant="primary">Search</Button>
                            </Col>

                        </Row>
                    </Form>
                </div>
                <div className="row my-5">
                    {
                        activities.map(activity => <Activity activity={activity} />)
                    }
                </div>
            </Container>


        </div>
    );
};

export default Home;