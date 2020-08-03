import React from 'react';
import web from '../images/contentWriting.svg'
import { Common } from './Common';

export const Home = () => {
    return (
        <Common 
        name=" Grow your business with "
        imgsrc={web}
        visit="/about"
        btname="Get Started"
        />
    )
}