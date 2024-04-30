import React from "react";

function ErrorCard({ children, error, message, action, actionText, ...rest }) {
    return (
        <div className="fixed bottom-0 left-0">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            {children}
                            <h2 className="text-xl font-semibold text-black">
                                {error}
                            </h2>
                            <p className="text-base font-normal text-black">
                                {message}
                            </p>
                            <button
                                className="px-4 py-2 mt-4 text-white bg-primary rounded-md"
                                onClick={action}
                            >
                                {actionText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorCard;
