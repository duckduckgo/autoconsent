import generateCMPTests from "./runner";

generateCMPTests('legislation.gov.uk', [
    'https://www.legislation.gov.uk/',
], {
    skipRegions: ["US", "FR", "DE"]
});
