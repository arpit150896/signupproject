import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {


    return (
        <div>
            <h1>WELCOME HOMEPAGE</h1>
            <Link to="/login"><button type="button" class="btn btn-outline-primary">LOGIN</button></Link>
            <Link to="/signup"><button type="button" class="btn btn-outline-primary">SIGNUP</button></Link>
        </div>
    );
}
export default Homepage;
