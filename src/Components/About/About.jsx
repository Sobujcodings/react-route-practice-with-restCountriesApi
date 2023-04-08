import React from 'react';

const About = () => {
    return (
        // header r footer r height k bad diye dilam total viewport theke jate about majher total jayga ta niye ney
        <div className='w-screen h-[calc(100vh-96px)] flex justify-center items-center'>
            <h3 className='text-3xl'>This is the About Page</h3>
        </div>
    );
};

export default About;