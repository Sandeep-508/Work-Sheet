// src/common/DropDown.js

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { useState, useEffect } from 'react';

const DropDown = ({ onSelect, initialSelected }) => {
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const [selectedMonth, setSelectedMonth] = useState(initialSelected);

    useEffect(() => {
        setSelectedMonth(initialSelected);
    }, [initialSelected]);

    const handleSelect = (month) => {
        setSelectedMonth(month);
        onSelect(month);
    };

    return (
        <Menu>
            <MenuHandler>
                <Button className="font-eduAus">{selectedMonth}</Button>
            </MenuHandler>
            <MenuList>
                {months.map((month) => (
                    <MenuItem key={month} onClick={() => handleSelect(month)}>
                        {month}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default DropDown;
