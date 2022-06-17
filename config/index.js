const dev = process.env.NODE_ENV !== "production";

const hostUrl = process.env["HOST"];

export const server = dev ? "http://localhost:3000" : hostUrl;
