import generateCMPTests from "./runner";

generateCMPTests('thefreedictionary.com', [
    'https://thefreedictionary.com'], {
        skipRegions: ["US"]
    }
);
