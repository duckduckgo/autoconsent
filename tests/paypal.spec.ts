import generateCMPTests from "./runner";

generateCMPTests('paypal.de', [
    'https://paypal.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
