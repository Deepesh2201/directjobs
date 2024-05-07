// send otp https://graph.facebook.com/v19.0/177060842168147/messages
// save otp in db https://directjobs.in/partner/api/web/otpsave
// verify otp and login https://directjobs.in/partner/api/web/moblogin
import { baseUrl } from "./config";
import axios from "axios";
import { getUserProfile } from "./profile";

class Login {
    constructor() {
        this.otp = "";
        this.mobile = "";
        this.userType = "";
        this.data = {};
    }

    async sendOtp(mobile, userType) {
        this.mobile = Number(mobile);
        this.userType = userType;
        // Generate OTP or get it from an API
        this.otp = await this.generateOtp();
        console.log("OTP:", this.otp);

        // Construct data for sending OTP
        this.data = {
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: `91${this.mobile}`,
            type: "template",
            template: {
                name: "directjobs",
                language: {
                    code: "en",
                },
                components: [
                    {
                        type: "body",
                        parameters: [
                            {
                                type: "text",
                                text: this.otp,
                            },
                        ],
                    },
                ],
            },
        };

        // Send OTP using Axios
        return axios
            .post(
                "https://graph.facebook.com/v19.0/177060842168147/messages",
                this.data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${
                            import.meta.env.VITE_META_AUTH_TOKEN
                        }`,
                    },
                }
            )
            .then((response) => {
                this.saveOtp()
                    .then((response) => {
                        console.log("OTP saved successfully");
                        return response;
                    })
                    .catch((error) => {
                        console.log(error);
                        throw new Error("OTP not saved");
                    });

                return response;
            })

            .catch((error) => {
                console.log(error);
                throw new Error("Error occurred while sending OTP");
            });
    }

    async saveOtp() {
        console.log(
            "OTP:",
            this.otp,
            "Mobile:",
            this.mobile,
            "User Type:",
            this.userType
        );
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${baseUrl}/api/web/otpsave`,
            headers: {
                mobile: String(this.mobile),
                otp: String(this.otp),
                usertype: "User",
            },
        };

        axios
            .request(config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async verifyOtp(otp, mobile, userType) {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "https://directjobs.in/partner/api/web/moblogin",
            headers: {
                mobile: String(mobile),
                otp: String(otp),
                usertype: userType,
            },
        };

        return axios
            .request(config)
            .then((response) => {
                const userId = JSON.stringify(response.data.data.user_id);
                const userType = JSON.stringify(response.data.data.usertype);
                localStorage.setItem("userId", userId);
                localStorage.setItem("userType", userType);

                return response.data.data;
            })
            .catch((error) => {
                console.log(error);
                throw new Error("Invalid OTP");
            });
    }

    async generateOtp() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    async logout() {
        localStorage.removeItem("userId");
        localStorage.removeItem("userType");
    }

    async getUser() {
        const userId = localStorage.getItem("userId");
        const userType = localStorage.getItem("userType");

        console.log("User ID:", userId, "User Type:", userType);

        if (!userId || !userType) {
            return null;
        }

        return getUserProfile(userId).then((response) => {
            console.log(response);
            return response;
        });
    }
}

export default Login;
const login = new Login();
export { login };
