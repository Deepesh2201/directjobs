import { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

function SortBy({ selectedSort, setSelectedSort }) {
    let tags = [
        { id: 1, label: "Popular", color: "#000" },
        { id: 2, label: "Newest", color: "#000" },
        { id: 3, label: "Highest Salary", color: "#000" },
        { id: 4, label: "Lowest Salary", color: "#000" },
    ];
    const getOptions = () => {
        let options = [];
        for (let tag of tags || []) {
            options = [
                ...options,
                <Dropdown.Item
                    key={tag.id}
                    value={tag.id}
                    text={tag.label}
                    className="!text-sm "
                    active={selectedSort.id === tag.id}
                    onClick={() =>
                        setSelectedSort({ id: tag.id, label: tag.label })
                    }
                >
                    {tag.label}
                </Dropdown.Item>,
            ];
        }
        return options;
    };

    useEffect(() => {
        setSelectedSort(tags[0]);
    }, []);
    return (
        <div className="flex flex-wrap items-center gap-1">
            <span className="font-medium whitespace-nowrap">Sort By</span>
            <Dropdown
                placeholder="Select Sort By"
                text={selectedSort.label}
                name="recipient"
                selection
                value={selectedSort}
                onChange={(e, { value }) => setSelectedSort(value)}
                className="!w-full max-w-5"
            >
                <Dropdown.Menu>{getOptions()}</Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default SortBy;

SortBy.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    setSelectedSort: PropTypes.func.isRequired,
};
