import React from 'react';
import StatCard from '../../Shared/StatCard/StatCard';
import './Reputation.css';

const Reputation = () => {
    const stats = [
        { value: '5', label: 'Years Experience' },
        { value: '100+', label: 'Happy Customer' },
        { value: '100K', label: 'Facebook Follower' },
        { value: '8', label: 'Awards Won' },
    ];

    return (
        <div className="reputation-bg text-color d-flex align-items-center">
            <div className="container">
                <div className="row">
                    {stats.map((stat) => (
                        <div key={stat.label} className="col d-flex justify-content-center">
                            <StatCard value={stat.value} label={stat.label} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reputation;
