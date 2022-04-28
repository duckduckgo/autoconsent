import generateCMPTests from "./runner";

generateCMPTests('microsoft.com', [
    'https://docs.microsoft.com',
    'https://answers.microsoft.com'
], {
        skipRegions: ["US"]
    }
);
