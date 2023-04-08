import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Footer from './Components/Footer/Footer';

// home ta  amdr root folder

const App = () => {

    // loading spinner using useNavigation hook
    // const navigation = useNavigation ();

    return (
        <div>
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>




            {/* header is fixed here, home children will be set under it outlet */}
            {/* <div>{navigation.state === 'loading'? 'loading...': "" }</div> */}
        </div>
    );
};


export default App
