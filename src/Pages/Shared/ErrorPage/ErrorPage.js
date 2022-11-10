import React from 'react';
import useTitle from '../../../hooks/useTitle';

const ErrorPage = () => {

    useTitle('404 - Dream Kitchen')

    return (
        <div style={{height: '450px'}} className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h2 className="mb-0">404</h2>
                <h4>Not Found Any Page!!!</h4>
            </div>
        </div>
    );
};

export default ErrorPage;