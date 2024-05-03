import propTypes from "prop-types";
function CenterTitle({ main, subText, children }) {
    return (
        <div className="h-fit">
            <div className="text-3xl md:text-4xl lg:text-5xl text-center text-[color:var(--primary-color)]">
                {main}
                {children}
            </div>
            <p className="text-sm md:text-base lg:text-lg text-center mt-2 text-[color:var(--secondary-color)]">
                {subText}
            </p>
        </div>
    );
}

export default CenterTitle;


CenterTitle.propTypes = {
    main: propTypes.string,
    subText: propTypes.string,
    children: propTypes.node,
};
