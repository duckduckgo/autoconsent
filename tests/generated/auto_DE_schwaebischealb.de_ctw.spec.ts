import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwaebischealb.de_ctw', ['https://www.schwaebischealb.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
