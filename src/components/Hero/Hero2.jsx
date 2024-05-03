import abstract from "../../assets/abstracts/abstract_1.png";

function Hero2() {
    return (
        <div
            className="bg-[color:var(--primary-color)] py-14 lg:py-20 w-full my-8 md:my-28 lg:px-10 px-4 bg-cover md:bg-right bg-no-repeat"
            style={{
                backgroundImage: `url(${abstract})`,
            }}
        >
            <div className="px-6 lg:px-0 max-w-7xl m-auto grid sm:grid-cols-5 gap-6">
                <div className="flex flex-col justify-center sm:col-span-2 text-white gap-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                        <span className="flex items-center gap-2">
                            Get your
                            <span className="text-3xl md:text-4xl lg:text-4xl">
                                Dream Job
                            </span>
                        </span>
                        <span className="flex items-center gap-2">
                            in just
                            <span className="text-3xl md:text-4xl lg:text-4xl">
                                4
                            </span>
                            simple steps.
                        </span>
                    </h2>
                    <h3 className="text-xl font-medium">
                        No Fees, No Fuss, Just Your Career Unleashed!
                    </h3>
                    <ul className="list-disc ms-8">
                        <li>No Brokerage</li>
                        <li>No Middle Man</li>
                        <li>Easy To Use Interface</li>
                        <li>0% Commission</li>
                        <li>Free To Use</li>
                        <li>Realtime Job Updates</li>
                        <li>Call HR Directly</li>
                    </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-14 sm:col-span-3 mt-10 sm:mt-5 ms-6 sm:ms-0">
                    <div className="space-y-12">
                        <Card
                            step={"Step 1"}
                            title={"Register Your Account"}
                            description={
                                "Create your account and join our community to get preferred job."
                            }
                            icon={"fa-solid fa-user-plus"}
                            color={"bg-[#2d9cdb]"}
                        />

                        <Card
                            step={"Step 2"}
                            title={"Upload Your Resume"}
                            description={
                                "Share your professional story by uploading your resume."
                            }
                            icon={"fa-solid fa-receipt"}
                            color={"bg-[#e2b438]"}
                        />
                    </div>

                    <div className="space-y-12 sm:mt-8">
                        <Card
                            step={"Step 3"}
                            title={"Search Your Job"}
                            description={
                                "Explore opportunities and find your ideal job through targeted search."
                            }
                            icon={"fa-solid fa-search"}
                            color={"bg-[#4caf50]"}
                        />

                        <Card
                            step={"Step 4"}
                            title={"Apply For Dream Job"}
                            description={
                                "Pursue your aspirations by submitting your job application."
                            }
                            icon={"fa-solid fa-briefcase"}
                            color={"bg-[#ff5151]"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero2;

export function Card({ className, step, title, description, icon, color }) {
    return (
        <div className="relative bg-white hover:bg-opacity-95 p-5 rounded-lg lg:drop-shadow lg:hover:drop-shadow-xl delay-100 transition-all ease-linear">
            <div
                className={`absolute flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 text-white -top-4 -left-4 lg:-top-5 lg:-left-8 rounded-md ${color}`}
            >
                <i className={`${icon} lg:text-xl`}></i>
            </div>
            <div className="font-semibold ms-2">
                <span className="block md:text-lg">{step}</span>
                <h3 className="block text-[color:var(--primary-color)] text-lg lg:text-xl">
                    {title}
                </h3>
                <p className="lg:mt-1 text-xs lg:text-sm">{description}</p>
            </div>
        </div>
    );
}
