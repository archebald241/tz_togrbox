import React from "react";
import "./Button.scss";


interface IProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button:React.FC<IProps> = ({onClick, children}) => {
    return (
        <button onClick={onClick} className="Button">
            {children}
        </button>
    );
};

export default Button;