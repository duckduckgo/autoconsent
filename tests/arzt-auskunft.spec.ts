import generateCMPTests from "./runner";

generateCMPTests('arzt-auskunft.de', [
    'https://arzt-auskunft.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
