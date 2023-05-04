import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='fw-bold text-center my-5' >Blog Page</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-4'>
                        <h4 >1.Tell us the differences between uncontrolled and controlled components.?</h4>
                        <p><span className='fw-bold'>Ans:-</span>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    </div>
                    <div className='mb-4'>
                        <h4 >2.How to validate React props using PropTypes?</h4>
                        <p><span className='fw-bold'>Ans:-</span>rops and PropTypes are important mechanisms for passing read-only attributes between React components.We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
                    </div>
                    <div className='mb-4'>
                        <h4 >3.Tell us the difference between nodejs and express js.?</h4>
                        <p><span className='fw-bold'>Ans:-</span><span className="fw-bold">NodeJS</span> is the package, which provides the JavaScript run-time environment, whereas <span className='fw-bold'>Express</span> is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;