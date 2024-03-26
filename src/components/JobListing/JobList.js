export const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "Remote",
        type: "Full Time",
        salary: "100k",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        logo: "https://cdn-icons-png.flaticon.com/512/270/270014.png",
    },

    {
        id: 2,
        title: "Backend Developer",
        company: "Meta Inc.",
        location: "Remote",
        type: "Full Time",
        salary: "120k",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        logo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    },

    {
        id: 3,
        title: "Full Stack Developer",
        company: "Amazon",
        location: "Remote",
        type: "Full Time",
        salary: "150k",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        logo: "https://cdn-icons-png.flaticon.com/128/11423/11423450.png",
    },

    {
        id: 4,
        title: "Software Engineer",
        company: "Microsoft",
        location: "Remote",
        type: "Full Time",
        salary: "130k",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        logo: "https://cdn-icons-png.flaticon.com/128/732/732221.png",
    },

    {
        id: 5,
        title: "DevOps Engineer",
        company: "Netflix",
        location: "Remote",
        type: "Full Time",
        salary: "140k",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        logo: "https://cdn-icons-png.flaticon.com/128/2504/2504929.png",
    },
];

export const jobDetails = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "Remote",
        type: "Full Time",
        salary: "100k",
        logo: "https://cdn-icons-png.flaticon.com/512/270/270014.png",
        applyLink: "https://www.google.com",
        details: [
            {
                detailLabel: "Job Description",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultrices ultricies. Nullam nec purus ut libero ultrices ultricies. Nullam nec purus ut libero ultrices ultricies. Nullam nec purus ut libero ultrices ultricies. Nullam nec purus ut libero ultrices ultricies. Nullam nec purus ut libero ultrices ultricies.",
            },
            {
                detailLabel: "Job Requirements",
                type: "Array",
                detail: [
                    "Develop new user-facing features",
                    "Build reusable code and libraries for future use",
                    "Ensure the technical feasibility of UI/UX designs",
                    "Optimize application for maximum speed and scalability",
                    "Assure that all user input is validated before submitting to back-end",
                    "Collaborate with other team members and stakeholders",
                ],
            },
            {
                detailLabel: "Job Responsibilities",
                type: "Array",
                detail: [
                    "Develop new user-facing features",
                    "Build reusable code and libraries for future use",
                    "Ensure the technical feasibility of UI/UX designs",
                    "Optimize application for maximum speed and scalability",
                    "Assure that all user input is validated before submitting to back-end",
                    "Collaborate with other team members and stakeholders",
                ],
            },
            {
                detailLabel: "Job Benefits",
                type: "Array",
                detail: [
                    "Health Insurance",
                    "Paid Time Off",
                    "Flexible Work Hours",
                    "Remote Work",
                    "Professional Development",
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "Meta Inc.",
        location: "Remote",
        type: "Full Time",
        salary: "120k",
        logo: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
        applyLink: "https://www.meta.com",
        details: [
            {
                detailLabel: "Job Description",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },
            {
                detailLabel: "Job Requirements",
                type: "Array",
                detail: [
                    "Develop new user-facing features",
                    "Build reusable code and libraries for future use",
                    "Ensure the technical feasibility of UI/UX designs",
                    "Optimize application for maximum speed and scalability",
                    "Assure that all user input is validated before submitting to back-end",
                    "Collaborate with other team members and stakeholders",
                ],
            },
            {
                detailLabel: "Job Responsibilities",
                type: "Array",
                detail: [
                    "Develop new user-facing features",
                    "Build reusable code and libraries for future use",
                    "Ensure the technical feasibility of UI/UX designs",
                    "Optimize application for maximum speed and scalability",
                    "Assure that all user input is validated before submitting to back-end",
                    "Collaborate with other team members and stakeholders",
                ],
            },
            {
                detailLabel: "Job Benefits",
                type: "Array",
                detail: [
                    "Health Insurance",
                    "Paid Time Off",
                    "Flexible Work Hours",
                    "Remote Work",
                    "Professional Development",
                ],
            },
        ],
    },
];
// Path: src/components/JobListing/JobList.js

// function to return job details
export const getJobDetails = (id) => {
    return jobDetails.find((job) => job.id === id);
};
