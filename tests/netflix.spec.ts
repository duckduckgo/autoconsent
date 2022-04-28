import generateCMPTests from "./runner";

generateCMPTests('netflix.de', [
    'https://netflix.com'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
