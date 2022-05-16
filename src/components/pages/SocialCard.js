import React from 'react'
import './SocialCard.css';


const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.ngo_name}</div>
            <div className="card__body">
                <div className='state'>{userData.state}</div> 
                {/* <div className='address'>{userData.address}</div> */}
                <div className='sector'>{userData.sector}</div>         
            </div>
        </div>
        
    )
};

export default SocialCard;