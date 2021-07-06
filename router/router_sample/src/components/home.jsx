import React from 'react';

const Home = (props) => (
    <>
        <h1>Home</h1>
        <button onClick={() => props.history.push('/profile')}>Go Profile</button>
    </>
);

export default Home;