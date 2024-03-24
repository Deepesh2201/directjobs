import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SecondaryButton(props) {
    return (
        <Link
            className={`${props.className} border-2 border-[color:var(--primary-color)] text-[color:var(--primary-color)] hover:border-[color:var(--secondary-color)] hover:text-[color:var(--secondary-color)] px-8 py-2 font-medium rounded-md transition-colors delay-75 ease-in-out`}
            {...props}
        >
            {props.children}
        </Link>
    );
}

export default SecondaryButton;

SecondaryButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
