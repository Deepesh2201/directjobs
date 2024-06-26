import SecondaryButton from "../SharedComponents/SecondaryButton";
import background from "../../assets/images/hero_background.png";
import Jobseeker from "../../assets/images/hero_jobseeker.png";
import recruters from "../../assets/images/hero_recruters.png";

function HeroSection() {
    return (
        <div className="grid md:grid-cols-2 relative lg:gap-2 lg:px-8 max-w-7xl m-auto lg:py-8">
            <div
                style={{ backgroundImage: `url(${background})` }}
                className="bg-[#056cb7] bg-cover bg-center bg-no-repeat flex items-center justify-around p-5 lg:p-10 text-white lg:rounded-md"
            >
                <div>
                    <div className="flex items-center gap-2 my-2">
                        <i className="fas fa-user-tie"></i>
                        <p>Jobseeker</p>
                    </div>
                    <h1 className="text-xl lg:text-3xl">
                        We Have 2,08,000+ Live Jobs. <br />
                        Get Hired Now.
                    </h1>
                    <p className="text-xs lg:text-sm">
                        Your dream job is just a click away. Get hired directly
                        in top companies.
                    </p>

                    <div className="my-5">
                        <SecondaryButton to="/jobs" className="lg:py-3 bg-transparent !text-white !border-white hover:bg-white hover:!text-black">
                            Explore Jobs
                        </SecondaryButton>
                    </div>
                </div>
                <div className="w-[50%] min-w-32 mx-2 max-w-[400px] flex items-end h-full">
                    <img src={Jobseeker} alt="" />
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${background})` }}
                className="bg-[#ffd302] bg-cover bg-center bg-no-repeat flex items-center justify-around px-5 lg:px-10 text-black lg:rounded-md flex-row-reverse lg:flex-row"
            >
                <div className="py-5 lg:py-10 text-right lg:text-left">
                    <div className="flex items-center gap-2 my-2 w-full justify-end lg:justify-start">
                        <i className="fas fa-briefcase"></i>
                        <p>Recruiters</p>
                    </div>
                    <h1 className="text-xl lg:text-3xl">
                        Hire the Best Talent. <br />
                        Post a Job Now.
                    </h1>
                    <p className="text-xs lg:text-sm">
                        Find the best candidates in the fastest way. Post a job
                        now.
                    </p>

                    <div className="my-5">
                        <SecondaryButton className="lg:py-3 border-black bg-transparent text-black hover:text-white hover:bg-black">
                            Post a Job
                        </SecondaryButton>
                    </div>
                </div>
                <div className="w-[50%] min-w-32 mx-2 max-w-[400px] flex items-end h-full">
                    <img src={recruters} alt="" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
