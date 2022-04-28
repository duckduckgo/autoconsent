import generateCMPTests from "./runner";

generateCMPTests('vodafone.de', [
    'https://vodafone.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
