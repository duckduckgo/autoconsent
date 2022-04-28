import generateCMPTests from "./runner";

generateCMPTests('mediamarkt.de', [
    'https://mediamarkt.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
