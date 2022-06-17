const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://unero-ecommerce.vercel.app";

// export const server =
//   process.env.NODE_ENV === "development"
//     ? process.env.SERVER_URI
//     : `https://${process.env.VERCEL_URL}`;
