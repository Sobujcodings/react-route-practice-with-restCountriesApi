import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {

    const { region, area, name, population, ccn3 } = country;

    // console.log(country);

    return (
        <div className='border text-center p-4 bg-gray-400'>
            <h3 className='text-2xl'>{name.common}</h3>
            <p>{area}</p>
            <p>{population}</p>


            <Link to={`country/${ccn3}`}><button  className='bg-cyan-700 text-white rounded-md p-1 mt-2'>Show details</button></Link>
        </div>
    );
};

export default Country;