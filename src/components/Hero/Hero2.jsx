function Hero2() {
    return (
        <div className="bg-[color:var(--primary-color)] py-20 w-full my-8 md:my-36">
            <div className="px-6 lg:px-0 max-w-7xl m-auto grid sm:grid-cols-5 gap-6">
                <div className="flex flex-col justify-center sm:col-span-2 text-white gap-8">
                    <h2 className="text-3xl font-semibold ">
                        Get your <span className="text-4xl">Dream Job</span> in
                        just <span className="text-4xl">4</span> simple steps.
                    </h2>
                    <h3 className="text-xl font-medium">
                        No Fee, No Fuss, Just Your Career Unleashed!
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
                        <div className="relative bg-white hover:bg-opacity-95 p-5 rounded-2xl drop-shadow hover:drop-shadow-2xl className=delay-100 transition-all ease-linear">
                            <div className="absolute flex items-center justify-center w-16 h-16 bg-[#3898e2] text-white -top-5 -left-8 rounded-md">
                                <i className="fa-solid fa-mobile-button text-4xl"></i>
                            </div>
                            <div className="font-semibold ms-6">
                                <span className="block text-xl">Step 1</span>
                                <h3 className="block text-[color:var(--primary-color)] text-2xl">
                                    Register Your Account
                                </h3>
                                <p className="mt-1 text-sm">
                                    Create your account and join our community
                                    to get preferred job.
                                </p>
                            </div>
                        </div>

                        <div className="relative bg-white hover:bg-opacity-95 p-5 rounded-2xl drop-shadow hover:drop-shadow-2xl className=sm:ms-8 sm:-mr-8 delay-100 transition-all ease-linear">
                            <div className="absolute flex items-center justify-center w-16 h-16 bg-[#56d8b1] text-white -top-5 -left-8 rounded-md">
                                <i className="fa-solid fa-magnifying-glass text-4xl"></i>
                            </div>
                            <div className="font-semibold ms-6">
                                <span className="block text-xl">Step 3</span>
                                <h3 className="block text-[color:var(--primary-color)] text-2xl">
                                    Search Your Job
                                </h3>
                                <p className="mt-1 text-sm">
                                    Explore opportunities and find your ideal
                                    job through targeted search.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 sm:mt-8">
                        <div className="relative bg-white hover:bg-opacity-95 p-5 rounded-2xl drop-shadow hover:drop-shadow-2xl className=delay-100 transition-all ease-linear">
                            <div className="absolute flex items-center justify-center w-16 h-16 bg-[#e2b438] text-white -top-5 -left-8 rounded-md">
                                <i className="fa-solid fa-receipt text-4xl"></i>
                            </div>
                            <div className="font-semibold ms-6">
                                <span className="block text-xl">Step 2</span>
                                <h3 className="block text-[color:var(--primary-color)] text-2xl">
                                    Upload Your Resume
                                </h3>
                                <p className="mt-1 text-sm">
                                    Share your professional story by uploading
                                    your resume.
                                </p>
                            </div>
                        </div>

                        <div className="relative bg-white hover:bg-opacity-95 p-5 rounded-2xl drop-shadow hover:drop-shadow-2xl sm:ms-8 sm:-mr-8 delay-100 transition-all ease-linear">
                            <div className="absolute flex items-center justify-center w-16 h-16 bg-[#ff5151] text-white -top-5 -left-8 rounded-md">
                                <i className="fa-solid fa-briefcase text-4xl"></i>
                            </div>
                            <div className="font-semibold ms-6">
                                <span className="block text-xl">Step 4</span>
                                <h3 className="block text-[color:var(--primary-color)] text-2xl">
                                    Apply For Dream Job
                                </h3>
                                <p className="mt-3 text-sm">
                                    Pursue your aspirations by submitting an
                                    application for your dream job.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero2;
