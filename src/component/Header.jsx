import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <h1 id='Header' key="h2">Food Villa</h1>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header