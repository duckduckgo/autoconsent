import generateCMPTests from "./runner";

generateCMPTests('bundesregierung.de', [
    'https://bundesregierung.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
