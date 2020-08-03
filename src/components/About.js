import React from 'react';
import { Common } from './Common'; 
import web from '../images/contentCopyWrite.svg'

export const About = () => {
    return (
        <div>
            <Common 
            name=" Welcome to About Page."
            imgsrc={web}
            visit="/project"
            btname="Projects"
            />
        </div>
    )
}
