import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog - Dream Kitchen')

    return (
        <div className="container my-5">
            {/* Question - 1 */}
            <h2 className="fs-4 bg-primary text-white px-4 py-2 rounded">What is the difference between SQL and NoSQL?</h2>
            <h3 className="ms-4 mb-3 fs-4">
                Difference between SQL and NoSQL are written below - <br /><br />
                SQL <br />
                <span className="ms-5 d-block">
                    1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
                    2. These databases have fixed or static or predefined schema <br />
                    3. These databases are not suited for hierarchical data storage. <br />
                    4. These databases are best suited for complex queries <br />
                    5. Vertically Scalable <br />
                    Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc <br /><br />
                </span>

                NoSQL <br />
                <span className="ms-5 d-block">
                    1. Non-relational or distributed database system. <br />
                    2. They have dynamic schema <br />
                    3. These databases are best suited for hierarchical data storage. <br />
                    4. These databases are not so good for complex queries <br />
                    5. Horizontally scalable <br />
                    Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc <br />
                </span>
            </h3>


            {/* Question - 2 */}
            <h2 className="fs-4 bg-primary text-white px-4 py-2 rounded">What is JWT, and how does it work?</h2>
            <h3 className="ms-4 mb-3 fs-4">
                JWT or JSON Web Token is an open standard used to share security information between two parties - a client and a server. Each JWT contains encoded JSON objects including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /><br />

                Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using a secret key. <br /><br />

                Steps of JWT working process - <br />
                <span className="ms-5 d-block">
                    1. User sign-in using username and password or google/facebook. <br />
                    2. Authentication server verifies the credentials and issues a jwt signed using a secret key. <br />
                    3. In client side the secret key stored either in Local Storage or HTTP only cookies. <br />
                    4. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                    5. Resource server then verifies the authenticity of the token using the secret key. <br />
                </span>
            </h3>

            {/* Question - 3 */}
            <h2 className="fs-4 bg-primary text-white px-4 py-2 rounded">What is the difference between JavaScript and NodeJS?</h2>
            <h3 className="ms-4 mb-3 fs-4">
                Difference between JavaScript and NodeJS are written blow - <br /><br />

                JavaScript <br />
                <span className="ms-5 d-block">
                    1. Javascript is a programming language that is used for writing scripts on the website. <br />
                    2. Javascript can only be run in the browsers. <br />
                    3. It is basically used on the client-side. <br />
                    4. Javascript is capable enough to add HTML and play with the DOM. <br />
                    5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br />
                    6. Javascript is used in frontend development. <br />
                    7. Some of the javascript frameworks are Angular, Ember.js etc. <br />
                    8. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br /> <br />
                </span>

                NodeJS <br />
                <span className="ms-5 d-block">
                    1. NodeJS is a Javascript runtime environment. <br />
                    2. We can run Javascript outside the browser with the help of NodeJS. <br />
                    3. It is mostly used on the server-side. <br />
                    4. Nodejs does not have capability to add HTML tags. <br />
                    5. V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                    6. Nodejs is used in server-side development. <br />
                    7. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. <br />
                    8. Nodejs is written in C, C++ and Javascript. <br />
                </span>
            </h3>

            {/* Question - 4 */}
            <h2 className="fs-4 bg-primary text-white px-4 py-2 rounded">How does NodeJS handle multiple requests at the same time?</h2>
            <h3 className="ms-4 mb-3 fs-4">
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br /><br />

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
            </h3>
        </div>
    );
};

export default Blog;