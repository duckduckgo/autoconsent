import generateCMPTests from '../playwright/runner';

generateCMPTests('gkv-cookie-banner', [
    'https://www.gkv-spitzenverband.de/',
    'https://www.gkv-heilmittel.de/',
    'https://www.gkv-datenaustausch.de/',
]);

// Unreachable or too slow to show the banner from the US
generateCMPTests('gkv-cookie-banner', ['https://www.eu-patienten.de/', 'https://www.dvka.de/', 'https://www.gkv-buendnis.de/'], {
    skipRegions: ['US', 'NA'],
});
