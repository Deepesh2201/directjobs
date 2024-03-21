import heroBackground from "../../assets/images/heroBackground_2.png";
import heroElement from "../../assets/images/man_in_suit.png";
import PrimaryButton from "../SharedComponents/PrimaryButton";
import SecondaryButton from "../SharedComponents/SecondaryButton";
import QrCode from "../../assets/images/qrCode.png";

function Hero() {
    return (
        <div
            style={{ backgroundImage: `url(${heroBackground})` }}
            className="sm:h-screen pt-[150px] flex items-center bg-cover"
        >
            <div className="w-6/12 mx-14 hidden sm:block">
                <div className="">
                    <div className="bg-white bg-opacity-60 rounded-lg w-fit px-4 py-2 font-medium mb-4">
                        We Have 208.000+ Live Jobs
                    </div>
                    <div className="lg:text-8xl md:text-5xl font-semibold">
                        Ab{" "}
                        <h1 className="inline underline text-[color:var(--primary-color)]">
                            Direct Job
                        </h1>{" "}
                        Lega India.
                    </div>
                    <div className="lg:mt-8 md:mt-5 lg:text-xl">
                        <p>Now Your Dream Job Is On Your Finger Tips.</p>
                        <p>
                            Get Hired Directly In Top Companies Without Paying
                            Anything.
                        </p>
                    </div>
                    <div className="mt-8">
                        <PrimaryButton className={"py-4"}>
                            Get Started
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <div className="relative sm:w-6/12 w-full h-full flex justify-center items-end">
                <img className="max-h-full" src={heroElement} alt="" />
                <div className="absolute bg-white drop-shadow m-2 p-4 rounded-xl bg-opacity-95 w-11/12 sm:w-9/12 backdrop-blur-xl text-center">
                    <div className="sm:hidden">
                        <h2 className="text-2xl font-medium text-center my-2">
                            Get Your Dream Job
                        </h2>
                        <p className="my-4 text-justify text-sm">
                            Now Your Dream Job Is On Your Finger Tips. Get Hired
                            Directly In Top Companies Without Paying Anything.
                        </p>
                        <div className="flex justify-evenly">
                            <PrimaryButton className="!py-2 !px-2.5 whitespace-nowrap">
                                Download App
                            </PrimaryButton>
                            <SecondaryButton className="!py-2 !px-2.5 whitespace-nowrap">
                                Create Account
                            </SecondaryButton>
                        </div>
                    </div>
                    <div className="hidden sm:flex gap-4 drop-shadow-lg items-center">
                        <span className="w-5/12">
                            <img className="w-full" src={QrCode} alt="" />
                        </span>
                        <span className="text-left">
                            <h2 className="text-2xl font-semibold">Scan this QR to download Our Android App</h2>
                            <hr className="my-1" />
                            <p>Always keep your portable job buddy in your pocket.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
