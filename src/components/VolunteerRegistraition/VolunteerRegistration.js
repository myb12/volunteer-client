import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './VolunteerRegistration.css';
import logo from '../../images/logo/logo.png'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';

const VolunteerRegistration = () => {
    const [volunteer, setVolunteer] = useState([]);
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {activityId} = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => setVolunteer(data));
    }, [])
    const specificActivity = volunteer.find(v => v.id === +activityId);
    console.log(specificActivity);

    const onSubmit = data => console.log(data);
    return (
        <div className="custom-container">
            <div className="container">
                <div className="div">
                    <Link to="/home">
                        <Button variant="primary">Go Home</Button>
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="/home">
                        <img src={logo} alt="logo" className="my-3" />
                    </Link>
                </div>
                <div className="custom-form col-md-6 offset-md-3">
                    <h5 className="font-weight-bold">Register as a Volunteer</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="fullName" defaultValue={user.displayName} placeholder="Full Name" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className="error">Full Name is required</span>}

                        <input name="email" defaultValue={user.email} placeholder="Username or Email" {...register("email", { required: true })} />
                        {errors.email && <span className="error">Email is required</span>}

                        <input name="date" type="date" {...register("date", { required: true })} />
                        {errors.date && <span className="error">Date is required</span>}

                        <input name="description" placeholder="Description" {...register("description", { required: true })} />
                        {errors.description && <span className="error">Description is required</span>}

                        <input name="activityName" defaultValue={specificActivity?.activityName} placeholder="Activity Name" {...register("activityName", { required: true })} />
                        {errors.activityName && <span className="error">Activity Name is required</span>}

                        {/* <input {...register("exampleRequired", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>} */}

                        <input type="submit" variant="primary" value="Registration" className="my-3 " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRegistration;