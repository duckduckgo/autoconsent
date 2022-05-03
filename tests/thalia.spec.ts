import generateCMPTests from "./runner";

generateCMPTests('thalia.de', [
    'https://thalia.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
