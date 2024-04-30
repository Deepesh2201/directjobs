import { Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

const SearchableDropdown = ({
    placeholder,
    options,
    search = true,
    icon = "",
    value,
    setValue,
    props,
}) => (
    <div className="flex items-center justify-between w-full rounded-md p-0.5 lg:p-[2.5px]">
        {Boolean(icon) && (
            <div className="w-10 flex justify-center items-center bg--50 h-full">
                <i className={`${icon} text-base`}></i>
            </div>
        )}
        <Dropdown
            className="w-full"
            placeholder={placeholder}
            search={search}
            selection
            options={options}
            value={value}
            onChange={(e, { value }) => {
                console.log(value);
                setValue(value);
            }}
            clearable
            {...props}
        />
    </div>
);
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
export default SearchableDropdown;

SearchableDropdown.propTypes = {
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    search: PropTypes.bool,
    icon: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    props: PropTypes.object,
};