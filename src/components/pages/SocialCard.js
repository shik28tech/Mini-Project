import React from 'react'
import './SocialCard.css';


const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.ngo_name}</div>
            <div className="card__body">
                <div className='state'><h2>State --</h2>{userData.state}</div> 
                <div className='address'><h2>Address --</h2>{userData.address}</div>
                <div className='sector'><h2>Sector Working In --</h2>{userData.sector}</div>         
            </div>
        </div>
        
    )
};

export default SocialCard;