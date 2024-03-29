import { Link } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import faqs from "./data/faqData";
import { useEffect } from "react";

function FAQs() {
    // function to replace [link_url](text) to <a href="link_url">text</a> and return html object
    const formatLink = (content) => {
        const regex = /\[(.*?)\]\((.*?)\)/g;
        const formattedContent = content.replace(
            regex,
            '<a class="text-[color:var(--primary-color)]" href="$2">$1</a>'
        );
        return <div dangerouslySetInnerHTML={{ __html: formattedContent }} />;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-7xl md:pt-10 m-auto space-y-8">
            <div className="grid grid-cols-2">
                <div className="space-y-6">
                    <h1 className="text-5xl text-[color:var(--primary-color)]">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-zinc-800">
                        Here are some of the most frequently asked questions. If
                        you have any other questions, please feel free to visit{" "}
                        <Link
                            to="/support"
                            className="text-[color:var(--primary-color)]"
                        >
                            Help Centre
                        </Link>
                        .
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <svg
                        className="w-6 h-6 text-[color:var(--primary-color)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    <p className="text-zinc-800">
                        Click on the question to view the answer.
                    </p>
                </div>
                {faqs.map((faq) => (
                    <Accordion key={faq.id} title={faq.title}>
                        {formatLink(faq.content)}
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default FAQs;
