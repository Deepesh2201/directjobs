import PropTypes from "prop-types";

function UserProfileLabel({ avatar, name, username, btn }) {
    return (
        <div className="flex justify-between items-center">
            <div className="ml-3 mt-4 flex items-center space-x-2">
                {avatar && (
                    <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={avatar}
                        alt={name}
                    />
                )}
                <span className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                        {name}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                        {username}
                    </span>
                </span>
            </div>
            <div className="w-9 h-9 sm:w-auto bg-[color:var(--primary-color)] text-white flex justify-center items-center rounded">
                {btn}
            </div>
        </div>
    );
}

export default UserProfileLabel;

UserProfileLabel.propTypes = {
    avatar: PropTypes.object,
    name: PropTypes.string,
    username: PropTypes.string,
    btn: PropTypes.object,
};
