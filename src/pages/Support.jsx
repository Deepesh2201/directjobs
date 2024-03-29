import { useEffect } from "react";
import { Link } from "react-router-dom";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.document.title = "Help Center | Direct Jobs";
    }, []);
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
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-8">
                {/* card with differet office name, address, email and location */}
                <div className="flex gap-4 mt-8 w-full">
                    <div className="w-full divide-y">
                        <div className="py-3">
                            <h2 className="text-xl font-semibold text-[color:var(--primary-color)]">
                                Bengaluru Office
                            </h2>
                            <p className="font-medium">
                                Direct Jobs, Sector 1, HSR Layout, Bengaluru,
                                Karnataka, India - 560102
                            </p>
                            <p className="text">
                                <span className="font-medium">Email:</span>{" "}
                                <a
                                    href="mailto:support@directjobs.com"
                                    className="text-[color:var(--primary-color)]"
                                >
                                    support@directjobs.com
                                </a>
                            </p>
                            <p className="text">
                                <span className="font-medium">Phone:</span>{" "}
                                <a
                                    href="tel:+911234567890"
                                    className="text-[color:var(--primary-color)]"
                                >
                                    +91-123 456 7890
                                </a>
                            </p>
                        </div>
                        <div className="py-3">
                            <h2 className="text-xl font-semibold text-[color:var(--primary-color)]">
                                Delhi Office
                            </h2>
                            <p className="font-medium">
                                Direct Jobs, Near Metro Station, Lajpath Nagar,
                                Delhi, India - 110024
                            </p>
                            <p className="text">
                                <span className="font-medium">Email:</span>{" "}
                                <a
                                    href="mailto:support@directjobs.com"
                                    className="text-[color:var(--primary-color)]"
                                >
                                    support@directjobs.com
                                </a>
                            </p>
                            <p className="text">
                                <span className="font-medium">Phone:</span>{" "}
                                <a
                                    href="tel:+911234567890"
                                    className="text-[color:var(--primary-color)]"
                                >
                                    +91-123 456 7890
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* contact form */}
                <div className="">
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

            <div className="mt-8 md:mt-16 text-center">
                <p>
                    Visit our{" "}
                    <Link
                        to="/faqs"
                        className="text-[color:var(--primary-color)] font-medium"
                    >
                        FAQs section
                    </Link>{" "}
                    to get instant resolution to your queries. If you still need
                    help, feel free to contact us.
                </p>
            </div>
        </div>
    );
}

export default Contact;
