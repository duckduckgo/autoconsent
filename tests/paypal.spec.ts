import generateCMPTests from "../playwright/runner";

generateCMPTests('paypal.de', [
    'https://paypal.de'], {
        skipRegions: ["US", "FR", "GB"]
    }
);
