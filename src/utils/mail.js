import Mailgen from "mailgen";

const emailVerficationMailgenContent = (username, verificationLink) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our app! We're very excited to have you on board.",
            action: {
                instructions: "To get started, please click here:",
                button: {
                    color: "#22BC66",
                    text: "Confirm your account",
                    link: verificationLink,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

const forgotPasswordMailgenContent = (username, resetPasswordLink) => {
    return {
        body: {
            name: username,
            intro: "You requested a password reset. Please click the button below to reset your password.",
            action: {
                instructions: "To reset your password, please click here:",
                button: {
                    color: "#22BC66",
                    text: "Reset your password",
                    link: resetPasswordLink,
                },
            },
            outro: "If you did not request a password reset, please ignore this email.",
        },
    };
};

export { emailVerficationMailgenContent, forgotPasswordMailgenContent };
