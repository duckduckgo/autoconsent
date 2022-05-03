import generateCMPTests from "./runner";

generateCMPTests('Onetrust', [
    'https://mailchimp.com/',
    'https://stackoverflow.com/',
    'https://www.zdf.de/',
]);

generateCMPTests('Onetrust', [
    'https://arstechnica.com/',
    'https://www.nvidia.com/',
], {
    skipRegions: ['US', 'GB']
});
