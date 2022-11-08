import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Blog = () => {
    const { name } = useContext(AuthContext);
    return (
        <div>
            <h2>This is blog page</h2>
            <h2>{name}</h2>
            <h2>{name}</h2>
        </div>
    );
};

export default Blog;