import PropTypes from "prop-types";
function PopupModal({ children }) {
    return <div className="fixed w-full h-full left-0 top-0">{children}</div>;
}

export default PopupModal;

PopupModal.propTypes = {
    children: PropTypes.node.isRequired,
};
