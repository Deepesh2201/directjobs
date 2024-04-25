export default  (amount) => {
    return amount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
    });
};