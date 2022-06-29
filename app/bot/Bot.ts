import Twitter from "twitter-api-v2";
import getWorldData from "./getWorldData";
import buildTweet from "./buildTweet";
import logError from "./logError";
import { WorldData } from "./interfaces/WorldData";

class Bot {
    twitter: Twitter;

    constructor(appKey: string, appSecret: string, accessToken: string, accessSecret: string) {
        this.twitter = new Twitter({
            appKey,
            appSecret,
            accessToken,
            accessSecret
        });
    }

    async run(): Promise<void> {
        console.log("Bot started.\n");

        // The bot runs once a day.
        setInterval(async () => {
            // Fetches the JSON from the internet.
            // If the fetch succeeds, create the string to tweet and proceed to tweet it.
            await getWorldData().then(async (worldData: WorldData) => {
                    const status = await buildTweet(worldData);

                    return status;
                }).then(async (status: string) => {
                    console.log("Tweeting...");

                    await this.twitter.v1.tweet(status);
                }).then(() => {
                    console.log("Tweeted! Will tweet once again in a day. \n");
                }).catch((exception) => {
                    logError(exception);
                });
        }, 864e5);

    }
}

export default Bot;