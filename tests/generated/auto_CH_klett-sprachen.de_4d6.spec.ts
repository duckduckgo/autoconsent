import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_klett-sprachen.de_4d6', ['https://www.klett-sprachen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
