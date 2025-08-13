import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hoklartherm.de_upn', ['https://www.hoklartherm.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
