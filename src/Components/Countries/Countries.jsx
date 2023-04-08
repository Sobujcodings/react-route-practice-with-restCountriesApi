import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {

    const countries = useLoaderData();
    // console.log(countries);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 p-3'>
            {
                countries.map(country=><Country
                key={country.ccn3}
                country={country}
                ></Country>  
                )
            }
        </div>
    );
};

export default Countries;