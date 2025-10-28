import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_adventskalender-paradies.de_eja', ['https://www.adventskalender-paradies.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
