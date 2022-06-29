import Twitter from "twitter-api-v2";
import dotenv from "dotenv";

dotenv.config();

test("Can login to Twitter and make a request.", async () => {
    const appKey: string = process.env.API_KEY ?? "";
    const appSecret: string = process.env.API_SECRET ?? "";
    const accessToken: string = process.env.ACCESS_TOKEN ?? "";
    const accessSecret: string = process.env.ACCESS_SECRET ?? "";

    const twitter = new Twitter({
        appKey,
        appSecret,
        accessToken,
        accessSecret
    });

    expect(await twitter.currentUser()).not.toThrowError;
})