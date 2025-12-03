import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_themen.kleinanzeigen.de_bmg', ['https://themen.kleinanzeigen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
