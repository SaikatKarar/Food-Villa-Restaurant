import React from 'react'

function RestaurantCard() {
    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img className='res-logo' src="https://images.unsplash.com/photo-1581184953987-5668072c8420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" alt="res-logo" />
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard