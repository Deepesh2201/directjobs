import JobListing from "../components/JobListing/JobListing";
import JobSearch from "../components/JobSearch/JobSearch";

function Jobs() {
    return (
        <>
            <div className="max-w-7xl w-full py-6 md:py-10 m-auto px-4 md:px-8 md:h-screen flex flex-col">
                <div className="h-fit">
                    <h1 className="text-4xl md:text-5xl text-center text-[color:var(--primary-color)]">
                        Find your dream job
                    </h1>
                    <p className="text-sm md:text-base text-center mt-2 text-[color:var(--secondary-color)]">
                        Search for job title, keywords, or company name
                    </p>
                </div>
                <JobSearch />
                <div className="h-full overflow-hidden">
                    <JobListing />
                </div>
            </div>
        </>
    );
}

export default Jobs;
