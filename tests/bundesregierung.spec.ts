import generateCMPTests from "../playwright/runner";

generateCMPTests('bundesregierung.de', [
    'https://bundesregierung.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
