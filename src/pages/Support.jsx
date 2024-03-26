import PrimaryButton from "../components/SharedComponents/PrimaryButton";

function Contact() {
    return (
        <div className="max-w-7xl md:pt-10 m-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 md:gap-8">
                <div className="">
                    <h1 className="text-5xl text-[color:var(--primary-color)]">
                        Need Help?
                    </h1>
                    <p className="text-sm md:text-base text-[color:var(--secondary-color)]">
                        Our team is here to help you. If you have any questions
                        or need help, feel free to contact us.
                    </p>
                    <div>
                        {/* card with differet office name, address, email and location */}
                        <div className="flex gap-4 mt-8 w-full">
                            <div className="bg-gray-100 p-4 rounded-md w-full">
                                <div>
                                    <h2 className="text-lg font-semibold text-[color:var(--primary-color)]">
                                        Bengaluru Office
                                    </h2>
                                    <p className="font-medium">
                                        Direct Jobs, Sector 1, HSR Layout,
                                        Bengaluru, Karnataka, India - 560102
                                    </p>
                                    <p className="text-sm">
                                        Email: support@directjobs.com
                                    </p>
                                    <p className="text-sm">
                                        Phone: +977-1234567890
                                    </p>
                                </div>
                                <div className="my-4">
                                    <PrimaryButton className="bg-[color:var(--primary-color)] text-white py-2 rounded-md">
                                        Get Direction
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact form */}
                <div className="mt-8">
                    <h2 className="text-3xl font-semibold my-4">Contact Us</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="py-2 px-4 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="py-2 px-4 border border-gray-300 rounded-md"
                        />
                        <textarea
                            placeholder="Message"
                            className="py-2 px-4 border border-gray-300 rounded-md"
                        ></textarea>
                        <button className="bg-[color:var(--primary-color)] text-white py-2 rounded-md">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* faq section accordian */}
            <div className="mt-8">
                {/* section heading */}
                <h2 className="text-3xl font-semibold my-4">
                    Frequently Asked Questions
                </h2>
                <div className="border-t border-b border-gray-300">
                    <div className="flex justify-between items-center py-4">
                        <h2 className="text-lg font-semibold">
                            How can I contact support?
                        </h2>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="py-4">
                        <p className="text-sm text-gray-500">
                            You can contact our support team by sending an email
                            to support@directjobs.com or by calling us at
                            +977-1234567890.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
