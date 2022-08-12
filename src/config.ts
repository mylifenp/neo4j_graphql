import "dotenv/config";

export const PORT = process.env.PORT || 8080
export const NEO4J_URI = process.env.NEO4J_URI || "";
export const NEO4J_USER = process.env.NEO4J_USER || "";
export const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || "";