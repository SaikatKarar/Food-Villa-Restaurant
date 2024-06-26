import React from 'react'


function RestaurantCard(props) {
    const { resData } = props;
    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="res-logo" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard