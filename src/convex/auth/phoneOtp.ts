import { Phone } from "@convex-dev/auth/providers/Phone";
import axios from "axios";
import { alphabet, generateRandomString } from "oslo/crypto";

export const phoneOtp = Phone({
  id: "phone-otp",
  maxAge: 60 * 15, // 15 minutes
  
  async generateVerificationToken() {
    return generateRandomString(6, alphabet("0-9"));
  },
  
  async sendVerificationRequest({ identifier: phone, provider, token }) {
    try {
      // Using the same vly.ai email service to send SMS OTP
      // In production, you would use Twilio or another SMS service
      await axios.post(
        "https://email.vly.ai/send_otp",
        {
          to: phone,
          otp: token,
          appName: process.env.VLY_APP_NAME || "Inkless Is More",
          type: "sms"
        },
        {
          headers: {
            "x-api-key": "vlytothemoon2025",
          },
        },
      );
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },
});
