import generateCMPTests from "./runner";

generateCMPTests('usercentrics-1', [
    'https://hornbach.de',
    'https://dm.de'
], {
        skipRegions: ["US", "GB", "FR"]
    }
);
