import { useEffect } from "react";
import PropTypes from "prop-types";

function ErrorBanner({ error, timeout, setError }) {
    useEffect(() => {
        if (timeout) {
            setTimeout(() => {
                setError(null);
            }, timeout);
        }
    }, [timeout, setError]);

    return (
        error && (
            <div
                className={`flex items-center justify-between bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-xs md:text-sm`}
                role="alert"
            >
                <span className="flex gap-2">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error}</span>
                </span>
                <i
                    className="fas fa-times cursor-pointer text-sm"
                    onClick={() => setError(null)}
                ></i>
            </div>
        )
    );
}

export default ErrorBanner;

ErrorBanner.propTypes = {
    error: PropTypes.string,
    timeout: PropTypes.number,
    setError: PropTypes.func.isRequired,
};
