import getWorldData from "../app/bot/getWorldData";

test("Data is available to fetch correctly.", async () => {
    expect(await getWorldData()).not.toThrowError;    
});