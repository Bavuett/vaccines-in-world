import dotenv from "dotenv";
import Bot from "./bot/Bot";

dotenv.config();

// Values necessary to log in to Twitter in order to use their APIs.
const appKey: string = process.env.API_KEY ?? "";
const appSecret: string = process.env.API_SECRET ?? "";
const accessToken: string = process.env.ACCESS_TOKEN ?? "";
const accessSecret: string = process.env.ACCESS_SECRET ?? "";

try {
    console.log("Welcome! Starting bot...");

    const bot = new Bot(appKey, appSecret, accessToken, accessSecret);
    bot.run();
} catch (exception) {
    throw exception;
}