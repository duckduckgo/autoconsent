import generateCMPTests from "./runner";

generateCMPTests('borlabs', [
    'https://reitschuster.de'], {
        skipRegions: ["US"]
    }
);
