import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_buchfreund.de_gcx', ['https://www.buchfreund.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
