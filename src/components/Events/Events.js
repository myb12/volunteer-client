import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../Header/Header';
import './Events.css';

const Events = () => {
    return (
        <div className="eventPage">
            <Header />
            <Container className="py-5">
                <div className="text-center">
                    <h3>Welcome to Volunteer Network!!</h3>
                    <h4>You have <span className="text-primary font-weight-bold">6</span> events!!</h4>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row my-5">
                        {
                            [...Array(6)].map(event =>
                                <div className="col-xl-6 col-lg-6 col-md-6 single-events my-3">
                                    <div className="events-info row">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU" alt="" className="img-fluid max-width: 50% height: 50%" />
                                            </div>
                                            <div className="col-md-6" >
                                                <h5>Activity Name</h5>
                                                <h6><b>Date:</b> 25/10/2021 </h6>
                                                <p><b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aspernatur?</p>
                                                <Button variant="light">Cancel</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Events;