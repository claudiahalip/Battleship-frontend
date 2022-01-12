import React from 'react';

interface ButtonInterface {
    // eslint-disable-next-line no-unused-vars
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
}

const SidebarButton: React.FC<ButtonInterface> = function ({ clickHandler, text }) {
    return (
        <button className="start-button" type="button" onClick={clickHandler}>
            {text}
        </button>
    );
};

export default SidebarButton;
