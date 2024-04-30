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
            selection
            fluid
            placeholder={placeholder}
            search={search}
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
