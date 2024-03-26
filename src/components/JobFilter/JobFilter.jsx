function JobFilter() {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-[color:var(--primary-color)]">
                Job Listings
            </h2>
            <div className="mt-4 space-y-4">
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="jobType" id="fullTime" />
                    <label htmlFor="fullTime">Full Time</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="jobType" id="partTime" />
                    <label htmlFor="partTime">Part Time</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="jobType" id="remote" />
                    <label htmlFor="remote">Remote</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="jobType" id="internship" />
                    <label htmlFor="internship">Internship</label>
                </div>
            </div>
        </div>
    );
}

export default JobFilter;
