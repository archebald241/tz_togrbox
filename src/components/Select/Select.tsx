import React from "react";
import "./Select.scss";

interface IOption {
    value: string;
    label: string;
}

interface IProps {
    options: Array<IOption>;
    value: string;
    setValue: (value: string) => void;
}

export const IconArrowDown = () => {
    return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1867 6.47583L9.25463 6.47583L4.81338 6.47583C4.05338 6.47583 3.67338 7.39417 4.21171 7.9325L8.31254 12.0333C8.96963 12.6904 10.0384 12.6904 10.6955 12.0333L12.255 10.4737L14.7963 7.9325C15.3267 7.39417 14.9467 6.47583 14.1867 6.47583Z" fill={"#ADADAD"} />
        </svg>
    );
};

const Select: React.FC<IProps> = ({ value, options, setValue }) => {
    return (
        <div className={"selectContainer"}>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                {options.map((option) =>
                    <option value={option.value} key={option.value}>{option.label}</option>
                )}
            </select>
            <span>
                <IconArrowDown/>
            </span>
        </div>
    );
};

export default Select;