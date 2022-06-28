import { WorldData } from "./interfaces/WorldData";

async function buildTweet(worldData: WorldData): Promise<string> {
    const date: Date = new Date();

    const day = ("0" + date.getUTCDate()).slice(-2);
    const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
    const year = date.getUTCFullYear();

    const vaccinationsHundredUSA: number = worldData.USA.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredUK: number = worldData.GBR.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredIT: number = worldData.ITA.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredCH: number = worldData.CHN.people_fully_vaccinated_per_hundred;
    const vacciantionsHundredJP: number = worldData.JPN.people_fully_vaccinated_per_hundred;

    // I preffered to do multiline strings this way because I am able
    // to make the code look better without wasting characters in the tweets.
    const status: string = [
        "World Vaccinations on " + day + "." + month + "." + year + ".", 
        "", 
        "- USA: " + vaccinationsHundredUSA + "%",
        "- UK: " + vaccinationsHundredUK + "%",
        "- Italy: " + vaccinationsHundredIT + "%",
        "- China: " + vaccinationsHundredCH + "%",
        "- Japan: " + vacciantionsHundredJP + "%",
        "",
        "#COVID19 #COVIDvaccine"
    ].join("\n");
    
    return status;
}

export default buildTweet;