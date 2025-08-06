import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_themen.kleinanzeigen.de_g7o', ['https://themen.kleinanzeigen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
