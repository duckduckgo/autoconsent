import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_suedtirolerland.it_oaa', ['https://www.suedtirolerland.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
