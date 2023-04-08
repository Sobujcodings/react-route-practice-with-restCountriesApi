import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const CountryDetails = () => {
    const counrydetails = useLoaderData();
    const { name, population, area, capital } = counrydetails[0];


    // GO TO PREVIOUS  PAGE USING USENAVIGATE HOOK
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate(-1);
    }


    return (
        <div className='w-screen h-[calc(100vh-96px)] flex justify-center items-center'>
            <div className='border border-red-300 w-1/3 h-1/3 text-center pt-10 '>
                <h1 className='text-4xl font-bold '>{name.common}</h1>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <Link><button onClick={handleNavigation} className='bg-cyan-500 px-2 py-1 rounded-md mt-2'>GO Back</button></Link>
            </div>
        </div>
    );
};

export default CountryDetails;