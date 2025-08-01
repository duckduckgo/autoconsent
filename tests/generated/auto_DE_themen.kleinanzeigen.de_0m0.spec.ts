import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_themen.kleinanzeigen.de_0m0', ['https://themen.kleinanzeigen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
