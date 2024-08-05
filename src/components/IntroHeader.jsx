// src/components/IntroHeader.js

import React, { useState, useEffect } from 'react';
import DropDown from '../common/DropDown';

const IntroHeader = ({ onMonthSelect }) => {
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const monthIndex = new Date().getMonth();
        setCurrentMonth(months[monthIndex]);
    }, []);

    return (
        <div className="relative border-b py-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-3 px-4">
                    <p className="font-eduAus sm:text-4xl text-2xl text-white text-shadow font-bold">Sandeep (508)</p>
                    <DropDown
                        onSelect={onMonthSelect}
                        initialSelected={currentMonth}
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroHeader;
