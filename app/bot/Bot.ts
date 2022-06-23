import Twitter from "twitter-api-v2";
import DataStream from "../datastream/DataStream";
import { ITA, RootObject } from "../interfaces/Interfaces";

export default class Bot {
    twitter: Twitter;
    dataStream: DataStream;

    constructor(appKey: string, appSecret: string, accessToken: string, accessSecret: string) {
        this.twitter = new Twitter({
            appKey,
            appSecret,
            accessToken,
            accessSecret
        });

        this.dataStream = new DataStream();
    }

    async run(): Promise<void> {
        console.log("Bot started. \n");
        
        var vaccinations: RootObject = await this.dataStream.getVaccines();

        try {
            console.log(vaccinations.ITA.location);
        } catch(error) {
            console.log("Had trouble loading data.");
        }

        console.log("Bot stopped.");
    }

    async tweet(content: string): Promise<void> {
        this.twitter.v1.tweet(content);
        
        console.log("Tweeted: '" + content + "'\n");
    }
}