import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netlfix" />
            </div>
            <div className="menu">
                <a href="">Home</a>
                <a href="">TV Shows</a>
                <a href="">Movies</a>
                <a href="">News&Popular</a>
                <a href="">My Lists</a>
            </div>
            <div className="profile">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile" />
            </div>
        </div>
        </div>
    )
}

export default Navbar
