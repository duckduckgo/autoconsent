import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ammerland.adfc.de_ryc', ['https://ammerland.adfc.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
