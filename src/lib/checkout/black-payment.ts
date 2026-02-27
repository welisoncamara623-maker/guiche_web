export function getBlackAuthHeader() {
    const key = process.env.BLACK_PUBLIC_KEY;
    const secret = process.env.BLACK_SECRET_KEY;

    if (!key || !secret) {
        throw new Error("Missing Black Payments API Keys");
    }

    const base64 = Buffer.from(`${key}:${secret}`).toString("base64");
    return `Basic ${base64}`;
}