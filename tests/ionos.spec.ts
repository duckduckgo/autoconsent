import generateCMPTests from "./runner";

generateCMPTests('ionos.de', [
    'https://ionos.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
