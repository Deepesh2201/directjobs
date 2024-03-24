import { useRef, useState } from "react";
import background from "../assets/images/loginBg.png";
import BrandLogo from "../components/SharedComponents/BrandLogo";

function Login() {
    const [mobileNumbers, setMobileNumbers] = useState(Array(10).fill(""));

    const inputRefs = useRef([]);

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

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && index > 0 && !mobileNumbers[index]) {
            // If backspace is pressed and the current input is empty, move focus to the previous input
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="grid grid-cols-5 w-full min-h-screen">
            <div className="flex flex-col gap-1 px-6 md:px-20 lg:px-24 py-12 lg:col-span-3 col-span-5 w-full min-h-screen">
                <div className="mb-8">
                    <BrandLogo />
                </div>
                <h1 className="mt-8 text-3xl font-bold text-[color:var(--primary-color)] md:text-4xl lg:text-5xl leading-tight">
                    Welcome Back
                </h1>
                <p className="md:mt-2 text-sm md:text-lg text-gray-600 leading-tight">
                    Get connected with the best companies and find your dream
                    job easily with Direct Jobs.
                </p>
                <hr />
                <form action="" className="mt-8 items-start">
                    <label
                        htmlFor="mobileNumber"
                        className="block font-semibold text-gray-700 mb-3"
                    >
                        Enter You Mobile Number
                    </label>
                    <div className="flex w-full mb-20 gap-2">
                        <div className="w-full grid grid-cols-10 md:grid-cols-11 gap-0.5 md:gap-2">
                            <span className="hidden md:flex items-center justify-center text-sm md:text-lg font-semibold text-gray-700">
                                +91
                            </span>
                            {mobileNumbers.map((number, index) => (
                                <input
                                    key={index}
                                    type="number"
                                    className="border rounded md:rounded-md lg:rounded-lg font-medium disabled:bg-divider md:px-2 text-center aspect-square text-sm md:text-md lg:text-lg focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    placeholder="0"
                                    value={number}
                                    onChange={(e) =>
                                        handleChange(index, e.target.value)
                                    }
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    maxLength={1}
                                    ref={(input) =>
                                        (inputRefs.current[index] = input)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="rounded-md bg-[color:var(--primary-color)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Request OTP
                        </button>
                        <p className="mt-5 text-sm">
                            Don&apos;t have an account? &nbsp;
                            <a
                                href="/signup"
                                className="text-[color:var(--primary-color)] underline underline-offset-2"
                            >
                                Signup
                            </a>
                        </p>
                    </div>
                </form>
            </div>
            <div className="col-span-2 w-full hidden lg:block">
                <img
                    className="h-screen object-cover w-full"
                    src={background}
                    alt="cover"
                />
            </div>
        </div>
    );
}

export default Login;
