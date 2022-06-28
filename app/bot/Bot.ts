import Twitter from "twitter-api-v2";

import getWorldData from "./getWorldData";
import buildTweet from "./buildTweet";

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
        
        setInterval(async () => {
            const worldData: WorldData = await getWorldData();
            const status = await buildTweet(worldData);

            console.log("Tweeting...");
            
            await this.tweet(status);

        }, 86400000);

    }

    async tweet(content: string): Promise<void> {
        this.twitter.v1.tweet(content)
            .then(() => {
                console.log("\nTweeted! Will tweet again tomorrow. \n")
            }) 
            .catch((exception) => {
                console.log("\nWhoops! Couldn't tweet. \nHere's what happened. " + exception + "\n");
            });
    }
}

export default Bot;