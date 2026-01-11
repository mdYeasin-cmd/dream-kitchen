import React from 'react';

const StatCard = ({ value, label }) => {
    return (
        <div className="reputation-card text-center">
            <h4 className="reputation-title">{value}</h4>
            <p className="reputation-label fw-semibold fs-5 mb-0">{label}</p>
        </div>
    );
};

export default StatCard;
