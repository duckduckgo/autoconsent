import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_teekampagne.de_lnm', ['https://www.teekampagne.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
