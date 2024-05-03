import PropTypes from "prop-types";
function PopupModal({ children, closePopup }) {
    return (
        <div
            className="fixed w-full h-screen overflow-hidden bg-black bg-opacity-70 left-0 top-0 z-50 transition-all duration-300 ease-linear transform "
        >
            <div className="h-dvh">
                <div
                    className="h-[15%] w-full flex items-end justify-end"
                    onClick={closePopup}
                >
                    <div className="flex justify-end p-5">
                        <button className=" flex gap-1 items-center text-white">
                            <i className="fas fa-times"></i>
                            Close
                        </button>
                    </div>
                </div>
                <div className="h-[85%] w-full flex items-end justify-end">
                    <div className="w-full h-full bg-white p-5 rounded-t-md">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupModal;

PopupModal.propTypes = {
    children: PropTypes.node.isRequired,
    closePopup: PropTypes.func,
};
