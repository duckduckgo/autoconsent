import generateCMPTests from "./runner";

generateCMPTests('moneysavingexpert.com', [
    'https://moneysavingexpert.com'], {
        skipRegions: ["US", "FR", "DE"]
    }
);
