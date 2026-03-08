import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bluthochdruck.aok.de_5nn', ['https://bluthochdruck.aok.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
