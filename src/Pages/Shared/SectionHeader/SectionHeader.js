import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({
    title,
    lede,
    className = '',
    align = '',
    titleClassName = '',
    ledeClassName = ''
}) => {
    const wrapperClassName = ['section-header', align, className].filter(Boolean).join(' ');
    const headingClassName = ['section-title', titleClassName].filter(Boolean).join(' ');
    const ledeTextClassName = ['section-lede', ledeClassName].filter(Boolean).join(' ');

    return (
        <div className={wrapperClassName}>
            <h2 className={headingClassName}>{title}</h2>
            {lede ? <p className={ledeTextClassName}>{lede}</p> : null}
        </div>
    );
};

export default SectionHeader;
