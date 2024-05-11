import { useEffect, useState } from "react";
import { getUnsplashImage } from "../utils/UnsplashImage";
import MultiBoxInput from "../components/MultiBoxInput/MultiBoxInput";
import PrimaryButton from "../components/SharedComponents/PrimaryButton";
import PropTypes from "prop-types";
import ErrorBanner from "../components/SharedComponents/ErrorBanner";
import { Link } from "react-router-dom";

function EmployeerLogin() {
    const [bgImage, setBgImage] = useState(null);
    const [mobileNumber, setMobileNumber] = useState([]);
    const [OTP, setOTP] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isOTPSent, setIsOTPSent] = useState(false);

    useEffect(() => {
        getUnsplashImage("flight").then((image) => {
            setBgImage(image.urls.regular);
        });
    }, []);

    const handleSubmitMobileNumber = (e) => {
        e.preventDefault();
        setLoading(true);
        if (mobileNumber.join("").length !== 10) {
            setLoading(false);
            setError("Mobile number must be 10 digits");
            return;
        }
        // Simulate OTP sending
        setTimeout(() => {
            setLoading(false);
            setIsOTPSent(true);
            setError(null);
        }, 2000);
    };

    const handleSubmitOTP = (e) => {
        e.preventDefault();
        setLoading(true);
        // Add the function to handle OTP verification
        setTimeout(() => {
            setLoading(false);
            setError("Invalid OTP");
        }, 2000);
    };

    const resetState = () => {
        setMobileNumber([]);
        setOTP([]);
        setLoading(false);
        setError(null);
        setIsOTPSent(false);
    };

    return (
        <div className="relative h-[40rem] gap-6 flex flex-col md:flex-row">
            <div
                className="relative md:w-[40%] -m-5 h-44 md:h-full bg-center bg-no-repeat bg-cover rounded-t-md md:rounded-t-none md:rounded-tl-md"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <span className=" absolute bottom-5 md:bottom-10 text-white text-xs mx-2 p-2 drop-shadow-lg rounded bg-opacity-30">
                    &ldquo;The best way to predict the future is to create it.&rdquo;
                </span>
            </div>
            <div className="md:m-12 my-5 md:w-[60%]">
                <div>
                    <h1 className="text-4xl font-bold mb-10">
                        Employeer Login
                    </h1>
                    {!isOTPSent ? (
                        <MobileNumerForm
                            mobileNumber={mobileNumber}
                            setMobileNumber={setMobileNumber}
                            loading={loading}
                            isOTPSent={isOTPSent}
                            handleSubmitMobileNumber={handleSubmitMobileNumber}
                        />
                    ) : (
                        <OTPForm
                            OTP={OTP}
                            setOTP={setOTP}
                            loading={loading}
                            mobileNumber={mobileNumber}
                            handleSubmitOTP={handleSubmitOTP}
                            resetState={resetState}
                        />
                    )}
                    <ErrorBanner
                        error={error}
                        timeout={5000}
                        setError={setError}
                    />
                </div>
                <div className="mt-5">
                    <p className="text-sm text-gray-500 font-medium">
                        By logging in, you agree to our{" "}
                        <Link
                            href="#"
                            className="text-primary-color hover:underline font-bold underline"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="#"
                            className="text-primary-color hover:underline font-bold underline"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>

                    <p className="text-sm text-gray-500 font-medium mt-2">
                        <span className="text-primary-color font-medium">
                            Are you an employer?
                            <Link
                                to="/employer/login"
                                className="ml-1 underline"
                            >
                                Login here
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EmployeerLogin;

function MobileNumerForm({
    mobileNumber,
    setMobileNumber,
    loading,
    isOTPSent,
    handleSubmitMobileNumber,
}) {
    return (
        <form className="">
            <label htmlFor="mobileNumber" className="mb-2 block font-medium">
                Mobile Number
            </label>
            <MultiBoxInput
                length={10}
                id="mobileNumber"
                inputValue={mobileNumber}
                setInputValue={setMobileNumber}
            />
            <button className="my-8" onClick={handleSubmitMobileNumber}>
                <PrimaryButton>
                    {loading ? (
                        <i className="fas fa-spinner fa-spin animate-spin"></i>
                    ) : isOTPSent ? (
                        "Resend OTP"
                    ) : (
                        "Send OTP"
                    )}
                </PrimaryButton>
            </button>
        </form>
    );
}

MobileNumerForm.propTypes = {
    mobileNumber: PropTypes.array.isRequired,
    setMobileNumber: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    isOTPSent: PropTypes.bool.isRequired,
    handleSubmitMobileNumber: PropTypes.func.isRequired,
};

function OTPForm({
    OTP,
    setOTP,
    loading,
    handleSubmitOTP,
    mobileNumber,
    resetState,
}) {
    return (
        <form className="">
            <label htmlFor="OTP" className="mb-2 block font-medium">
                OTP
            </label>
            <MultiBoxInput
                length={6}
                id="OTP"
                inputValue={OTP}
                setInputValue={setOTP}
            />
            <span className="flex gap-2 items-center my-8">
                <button className="" onClick={handleSubmitOTP}>
                    <PrimaryButton>
                        {loading ? (
                            <i className="fas fa-spinner fa-spin animate-spin"></i>
                        ) : (
                            "Verify OTP"
                        )}
                    </PrimaryButton>
                </button>
                <span className="flex flex-col w-fit text-xs">
                    <span className="font-medium">
                        OTP sent to {mobileNumber.join("")}
                    </span>
                    <span className="flex gap-1">
                        Not your number?
                        <button
                            className="text-[color:var(--primary-color)] hover:underline font-medium"
                            onClick={resetState}
                        >
                            Change it
                        </button>
                    </span>
                </span>
            </span>
        </form>
    );
}

OTPForm.propTypes = {
    OTP: PropTypes.string.isRequired,
    setOTP: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    handleSubmitOTP: PropTypes.func.isRequired,
    mobileNumber: PropTypes.array.isRequired,
    resetState: PropTypes.func.isRequired,
};
