import generateCMPTests from "./runner";

generateCMPTests('etsy', [
    'https://www.etsy.com/',
], {
    skipRegions: ["US"],
});
