import React, { useState } from 'react';

export const Contact = () => {
    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        comments: "",
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullName}.
               My mobile number is ${data.phone}
               My email address is ${data.email}
            and My comment is ${data.comments} `)
    }
    return (
        <>
            <div className="my-4 contact-us">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>                            
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Name
                                </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="fullName"
                                value={data.fullName}
                                onChange={InputEvent}
                                placeholder="Enter your name ...." />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Phone
                                </label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="Enter your contact number ...." />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">
                                    Comments
                                </label>
                                <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                name="comments"
                                value={data.comments}
                                onChange={InputEvent}
                                placeholder="Enter your comments here ...." />
                            </div>    
                            <div className="col-12">
                                <button class="btn btn-outline-primary" type="submit">
                                    Submit form
                                </button>
                            </div>                        
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
