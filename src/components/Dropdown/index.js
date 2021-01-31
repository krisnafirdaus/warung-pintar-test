import React from 'react';

function Dropdown() {
    return (
        <div className="dropdown">
            <div className="control">
                <div className="selected-value">Select Filter</div>
                <div className="arrow" />
            </div>
            <div className="options"></div>
        </div>
    )
}