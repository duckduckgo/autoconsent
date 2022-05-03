import generateCMPTests from "./runner";

generateCMPTests('obi.de', [
    'https://obi.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
