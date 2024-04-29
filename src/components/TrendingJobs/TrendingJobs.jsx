import CenterTitle from "../SharedComponents/CenterTitle";
import Divider from "../SharedComponents/Divider";
import Card from "./Card";
import freelancer from "../../assets/images/trending_freelancer.png";
import partTime from "../../assets/images/trending_part_time.png";
import fresher from "../../assets/images/trending_fresher.png";
import workFromHome from "../../assets/images/trending_wfh.png";
import internationlJobs from "../../assets/images/trending_international.png";

const data = [
    {
        title: "Fresher",
        subtitle: "Fresher Jobs",
        image: fresher,
        totalJobs: 100,
    },
    {
        title: "Work From Home",
        subtitle: "Remote Jobs",
        image: partTime,
        totalJobs: 100,
    },
    {
        title: "Part Time",
        subtitle: "Part Time Jobs",
        image: freelancer,
        totalJobs: 100,
    },
    {
        title: "Freelancer",
        subtitle: "Work As Freelancer",
        image: workFromHome,
        totalJobs: 100,
    },
    {
        title: "International Jobs",
        subtitle: "Work Abroad",
        image: internationlJobs,
        totalJobs: 100,
    },
];

function TrendingJobs() {
    return (
        <>
            <CenterTitle>
                <h3 className="text-center font-medium text-lg text-[color:var(--primary-color)]">
                    Explore Jobs Trending Around You
                </h3>
                <h2 className="text-center font-medium text-3xl md:text-4xl lg:text-5xl text-black">
                    Jobs Trending In Your Area
                </h2>
            </CenterTitle>
            <Divider />
            <div className="grid md:grid-cols-3 gap-4 max-w-7xl px-8 m-auto">
                {data.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            totalJobs={item.totalJobs}
                        />
                    );
                })}

                <div className="border-2 border-transparent overflow-hidden">
                    <div className="flex justify-between md:h-40 items-center group-hover:bg-slate-300 bg-cover bg-center relative">
                        <div className="p-5">
                            <p className="text-2xl lg:text-3xl font-medium text-center md:text-left">
                                100+ More Categories To Explore
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrendingJobs;
