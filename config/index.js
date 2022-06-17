import absoluteUrl from "next-absolute-url";
const dev = process.env.NODE_ENV !== "production";

const { origin } = absoluteUrl(req);

export const server = dev ? "http://localhost:3000" : origin;
