import { WorldData } from "./interfaces/WorldData";

async function buildTweet(worldData: WorldData): Promise<string> {
    const date: Date = new Date();

    const day = ("0" + date.getUTCDate()).slice(-2);
    const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
    const year = date.getUTCFullYear();

    const vaccinationsHundredUS: number = worldData.USA.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredUK: number = worldData.GBR.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredIT: number = worldData.ITA.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredDE: number = worldData.DEU.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredFR: number = worldData.FRA.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredES: number = worldData.ESP.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredTU: number = worldData.TUR.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredCH: number = worldData.CHN.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredJP: number = worldData.JPN.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredIN: number = worldData.IND.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredBR: number = worldData.BRA.people_fully_vaccinated_per_hundred;
    const vaccinationsHundredSA: number = worldData.ZAF.people_fully_vaccinated_per_hundred;

    // I preferred to do multiline strings this way because I am able
    // to make the code look better without wasting characters in the tweets.
    const status: string = [
        "World Vaccines. " + day + "/" + month + "/" + year + ".", 
        "", 
        "- USA: " + vaccinationsHundredUS + "%",
        "- UK: " + vaccinationsHundredUK + "%",
        "- Italy: " + vaccinationsHundredIT + "%",
        "- Germany: " + vaccinationsHundredDE + "%",
        "- France: " + vaccinationsHundredFR + "%",
        "- Spain: " + vaccinationsHundredES + "%",
        "- Turkey: " + vaccinationsHundredTU + "%",
        "- China: " + vaccinationsHundredCH + "%",
        "- Japan: " + vaccinationsHundredJP + "%",
        "- India: " + vaccinationsHundredIN + "%",
        "- Brazil: " + vaccinationsHundredBR + "%",
        "- S. Africa: " + vaccinationsHundredSA + "%",
        "",
        "#COVID19 #COVID"
    ].join("\n");
    
    return status;
}

export default buildTweet;