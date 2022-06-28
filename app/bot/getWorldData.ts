import fetch from "node-fetch";

import { WorldData } from "./interfaces/WorldData";

async function getWorldData(): Promise<WorldData> {
    const url: string = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json";
    
    const response = await fetch(url);
    const worldData: WorldData = await response.json();

    return worldData;
}

export default getWorldData;