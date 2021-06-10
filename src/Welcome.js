import React from 'react';

const Welcome = () => {
    return (
        <>
            <h1>Welcome you {localStorage.getItem('currentUser')}</h1>

        </>

    );
}
export default Welcome;