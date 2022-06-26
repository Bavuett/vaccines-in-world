import Twitter from "twitter-api-v2";
import getWorldData from "./functions/getWorldData";
import { WorldData } from "../interfaces/Interfaces";

export default class Bot {
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
        
        const worldData: WorldData = await getWorldData();

        console.log(worldData.ITA.location);

        console.log("\nBot stopped.");
    }

    async tweet(content: string): Promise<void> {
        this.twitter.v1.tweet(content);
        
        console.log("Tweeted: '" + content + "'\n");
    }
}