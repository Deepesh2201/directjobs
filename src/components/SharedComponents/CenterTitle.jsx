import propTypes from "prop-types";
function CenterTitle({ main, subText, children }) {
    return (
        <div className="h-fit">
            <h1 className="text-4xl md:text-5xl text-center text-[color:var(--primary-color)]">
                {main}
                {children}
            </h1>
            <p className="text-sm md:text-base text-center mt-2 text-[color:var(--secondary-color)]">
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
