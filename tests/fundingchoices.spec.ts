import generateCMPTests from "./runner";

generateCMPTests('funding-choices', [
    'https://www.schulferien.org/',
    'https://www.bbc.com/',
    'https://www.accuweather.com/',
    'https://hbr.org/',
], {
    skipRegions: ["US", "GB"]
});
