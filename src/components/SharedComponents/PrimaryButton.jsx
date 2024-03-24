import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PrimaryButton({ className, children, ...props }) {
    return (
        <Link
            className={`${className} bg-[color:var(--primary-color)] hover:bg-[color:var(--hover-btn-color)] px-8 py-2 font-medium text-white rounded-md transition-colors delay-75 ease-in-out`}
            {...props}
        >
            {children}
        </Link>
    );
}

export default PrimaryButton;

PrimaryButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
