import { useContext, useEffect, useRef, useState } from "react";
import BrandLogo from "../components/SharedComponents/BrandLogo";
import { Link } from "react-router-dom";
import { login } from "../db/login";
import UserContext from "../context/userContext";

function Login({ closePopup }) {
    const [mobileNumbers, setMobileNumbers] = useState(Array(10).fill(""));
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState(Array(4).fill(""));
    const [error, setError] = useState(null);

    const { user, setUser } = useContext(UserContext);

    const inputRefs = useRef([]);
    const otpRefs = useRef([]);

    const handleChange = (index, value) => {
        // Ensure that only numeric values are entered
        const newValue = value.replace(/\D/, "");
        // Limit the length of each input to 1 digit
        if (newValue.length <= 1) {
            // Update the input value
            const newMobileNumbers = [...mobileNumbers];
            newMobileNumbers[index] = newValue;
            setMobileNumbers(newMobileNumbers);

            // Move focus to the next input if available
            if (newValue.length === 1 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleOtpChange = (index, value) => {
        // Ensure that only numeric values are entered
        const newValue = value.replace(/\D/, "");
        // Limit the length of each input to 1 digit
        if (newValue.length <= 1) {
            // Update the input value
            const newOtp = [...otp];
            newOtp[index] = newValue;
            setOtp(newOtp);

            // Move focus to the next input if available
            if (newValue.length === 1 && otpRefs.current[index + 1]) {
                otpRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && index > 0 && !mobileNumbers[index]) {
            // If backspace is pressed and the current input is empty, move focus to the previous input
            inputRefs.current[index - 1].focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === "Backspace" && index > 0 && !otp[index]) {
            // If backspace is pressed and the current input is empty, move focus to the previous input
            otpRefs.current[index - 1].focus();
        }
    };

    const handleMobileSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const mobileNumber = mobileNumbers.join("");
        login
            .sendOtp(mobileNumber, "User")
            .then((response) => {
                if (response) {
                    setShowOtpForm(true);
                    setLoading(false);
                }
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
                setTimeout(() => {
                    setError(null);
                }, 5000);
            });
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const mobileNumber = mobileNumbers.join("");
        const verificationOtp = otp.join("");
        login
            .verifyOtp(verificationOtp, mobileNumber, "User")
            .then((response) => {
                setLoading(false);
                console.log(response);
                setUser(response);

                closePopup();
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
                setTimeout(() => {
                    setError(null);
                }, 5000);
            });
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="w-full md:min-h-screen">
            <div className="relative m-auto max-w-7xl">
                <div className="flex flex-col min-h-svh md:min-h-screen px-6 md:px-20 lg:px-24 py-8 md:py-16">
                    <div className="flex flex-col gap-1.5">
                        <div className="">
                            <BrandLogo />
                        </div>
                        <h1 className="mt-8 text-3xl font-bold text-[color:var(--primary-color)] md:text-4xl lg:text-5xl leading-tight">
                            Welcome
                        </h1>
                        <p className="md:mt-2 text-sm md:text-lg text-gray-600 leading-tight">
                            Hey there! Welcome back to Direct Jobs. Let&apos;s
                            get you started.
                        </p>
                        <hr />
                        <div className="mt-8 items-start">
                            {!showOtpForm && (
                                <>
                                    <label
                                        htmlFor="mobileNumber"
                                        className="block font-semibold text-gray-700 mb-3"
                                    >
                                        Enter You Mobile Number
                                    </label>
                                    <div className="flex w-full mb-8 gap-2">
                                        <div className="w-full grid grid-cols-10 md:grid-cols-11 gap-0.5 md:gap-2">
                                            <span className="hidden md:flex items-center justify-center text-sm md:text-lg font-semibold text-gray-700">
                                                +91
                                            </span>
                                            {mobileNumbers.map(
                                                (number, index) => (
                                                    <input
                                                        key={index}
                                                        type="number"
                                                        className="border rounded md:rounded-md lg:rounded-lg font-medium disabled:bg-divider md:px-2 text-center aspect-square text-sm md:text-md lg:text-lg focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                        placeholder="0"
                                                        value={number}
                                                        onChange={(e) =>
                                                            handleChange(
                                                                index,
                                                                e.target.value
                                                            )
                                                        }
                                                        onKeyDown={(e) =>
                                                            handleKeyDown(
                                                                index,
                                                                e
                                                            )
                                                        }
                                                        maxLength={1}
                                                        ref={(input) =>
                                                            (inputRefs.current[
                                                                index
                                                            ] = input)
                                                        }
                                                        disabled={showOtpForm}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}

                            {showOtpForm && (
                                <div className="flex flex-col mb-8 gap-2">
                                    <label
                                        htmlFor="otp"
                                        className="block font-semibold text-gray-700 mb-3"
                                    >
                                        Enter OTP
                                    </label>
                                    {
                                        <div className="w-full max-w-52 grid grid-cols-4 md:grid-cols-11 gap-0.5 md:gap-2">
                                            {otp.map((number, index) => (
                                                <input
                                                    key={index}
                                                    type="number"
                                                    className="border rounded md:rounded-md lg:rounded-lg font-medium disabled:bg-divider md:px-2 text-center aspect-square text-sm md:text-md lg:text-lg focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    placeholder="0"
                                                    value={number}
                                                    onChange={(e) =>
                                                        handleOtpChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyDown={(e) =>
                                                        handleOtpKeyDown(
                                                            index,
                                                            e
                                                        )
                                                    }
                                                    maxLength={1}
                                                    ref={(input) =>
                                                        (otpRefs.current[
                                                            index
                                                        ] = input)
                                                    }
                                                />
                                            ))}
                                        </div>
                                    }
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm font-semibold">
                                {error}
                            </div>
                        )}
                    </div>
                    {!loading && !showOtpForm && (
                        <button
                            type="button"
                            onClick={handleMobileSubmit}
                            className="rounded-md md:w-fit bg-[color:var(--primary-color)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Request OTP
                        </button>
                    )}

                    {loading && !showOtpForm && (
                        <button
                            type="button"
                            className="rounded-md md:w-fit bg-[color:var(--primary-color)] px-6 py-3 text-sm font-semibold text-white shadow-sm cursor-not-allowed"
                            disabled
                        >
                            Loading...
                        </button>
                    )}
                    {showOtpForm && (
                        <button
                            type="button"
                            onClick={handleOtpSubmit}
                            className="rounded-md md:w-fit bg-[color:var(--primary-color)] px-6 py-3 text-sm font-semibold text-white shadow-sm"
                        >
                            Verify OTP
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
