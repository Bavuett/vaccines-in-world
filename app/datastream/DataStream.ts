import { RootObject } from "../interfaces/Interfaces";

export default class DataStream {
    https;

    constructor() {
        this.https = require("https");
    }

    getVaccines(): RootObject {
        var fetchedData: RootObject;
        var data: string;

        let url: string = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json";

        this.https.get(url, function(response: any) {
            response.on("data", function(data_: any) {
                data += data_.toString();
            });

            response.on("error", function(error: any) {
                console.log("Couldn't fetch data. " + error);
            });

            response.on("end", function() {
                console.log("Fetched successfully! \n");
                fetchedData = JSON.parse(data);
            });
        });

        fetchedData = JSON.parse("");
        return fetchedData;
    }

    buildTweet(): string {
        return "";
    }
}