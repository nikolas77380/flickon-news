"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    email: {
        provider: "sendgrid",
        providerOptions: {
            apiKey: process.env.SENDGRID_API_KEY,
        },
        settings: {
            defaultFrom: "juliasedefdjian@strapi.io",
            defaultReplyTo: "juliasedefdjian@strapi.io",
            testAddress: "juliasedefdjian@strapi.io",
        },
    },
    graphql: {
        enabled: true,
        config: {
            playgroundAlways: false,
            defaultLimit: 10,
            maxLimit: 20,
            apolloServer: {
                tracing: true,
            },
        },
    },
});
