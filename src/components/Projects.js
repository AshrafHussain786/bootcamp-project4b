import React from 'react'; 
import Sdata from '../components/Sdata';
import { Card } from './Card';

export const Projects = () => {
    return (
    <>
        <div className="my-3">
            <h1 className="text-center"> My Projects (PIAIC Bootcamp2020) </h1>            
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Sdata.map((val, ind) => {
                                console.log("val.surge ", val.surge)
                                console.log("ind ", ind)                                                              
                                return <Card key={val.id}                                
                                imgsrc={val.imgsrc} 
                                title={val.title}                                
                                surge={val.surge}
                                repo={val.repo}                                 
                                />
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
