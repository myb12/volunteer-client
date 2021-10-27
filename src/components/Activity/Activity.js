import React from 'react';
import { Link } from 'react-router-dom';
import './Activity.css';

const Activity = ({ activity }) => {
    const { id, activityName, img, bgColor } = activity;
    return (
        <div className="col-lg-4 col-md-6 single-activity my-3">
            <Link to={`/volunteer-registration/${id}`} style={{ textDecoration: 'none' }}>
                <img src={img} alt="" className="w-100 " />
                <div className="activity-footer" style={{ backgroundColor: `${bgColor}` }}>
                    <span style={{ color: '#fff' }}>{activityName}</span>
                </div>
            </Link>
        </div>
    );
};

export default Activity;