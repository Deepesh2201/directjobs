// import image from "../assets/images/sadAstronaut.png";
import image from "../assets/images/look.gif";
import logo from "../assets/images/mobileLogo.png";
import PrimaryButton from "../components/SharedComponents/PrimaryButton";
const NotFoundPage = () => {
    return (
        <div className="sm:flex relative justify-around items-center h-screen w-full bg-[#fafafa] px-8 overflow-hidden">
            <div className="flex flex-col items-center justify-center h-screen bg-primary">
                <h1
                    className="!text-[10rem] font-semibold  leading-none glitch"
                    data-text="404"
                >
                    404
                </h1>
                <h1 className="text-5xl font-medium">Nothing Found Here</h1>
                <p className="my-3">
                    Oops! The page you are looking for does not exist.
                </p>
                <PrimaryButton to="/">Back To Home</PrimaryButton>
            </div>
            <div>
                <img className="max-w-[600px]" src={image} alt="" />
            </div>
            <div className="absolute bottom-5 left-5 flex gap-2 items-center">
                <img className="w-5 sm:w-8" src={logo} width={"50"} alt="" />
                <span className="font-medium text-zinc-700 leading-none">
                    <p>Direct Jobs</p>
                    <p className="text-xs font-normal">
                        Ab direct job lega India
                    </p>
                </span>
            </div>
        </div>
    );
};

export default NotFoundPage;
