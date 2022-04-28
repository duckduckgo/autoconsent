import generateCMPTests from "./runner";

generateCMPTests('ausopen.com', [
    'https://www.ausopen.com/',
], {
    skipRegions: ["US", "FR", "DE"]
});
