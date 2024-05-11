import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function MultiBoxInput({ length, inputValue, setInputValue, id }) {
    useEffect(() => {
        setInputValue(Array(length).fill(""));
    }, [length, setInputValue]);

    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        // Ensure that only numeric values are entered
        const newValue = value.replace(/\D/, "");
        // Limit the length of each input to 1 digit
        if (newValue.length <= 1) {
            // Update the input value
            const newInputValue = [...inputValue];
            newInputValue[index] = newValue;
            setInputValue(newInputValue);

            // Move focus to the next input if available
            if (newValue.length === 1 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && index > 0 && !inputValue[index]) {
            // If backspace is pressed and the current input is empty, move focus to the previous input
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="w-full grid grid-cols-10 md:grid-cols-11 gap-0.5 md:gap-2">
            {inputValue.map((number, index) => (
                <input
                    key={index}
                    type="number"
                    className="border rounded md:rounded-md lg:rounded-lg font-medium disabled:bg-divider md:px-2 text-center aspect-square text-sm md:text-md lg:text-lg focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="0"
                    id={id}
                    value={number}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                    ref={(input) => (inputRefs.current[index] = input)}
                />
            ))}
        </div>
    );
}

export default MultiBoxInput;

MultiBoxInput.propTypes = {
    length: PropTypes.number.isRequired,
    inputValue: PropTypes.array.isRequired,
    setInputValue: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};
