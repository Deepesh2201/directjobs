const checkIsMobile = () => {
    return window.innerWidth < 768;
};

const checkMobileType = () => {
    // check if the device is an Android phone or Tablet or iPhone or iPad and return mobile type
    if (navigator.userAgent.match(/Android/i)) {
        return "android";
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        return "ios";
    } else {
        return "unknown";
    }
};

export { checkIsMobile, checkMobileType };
export default checkIsMobile;
