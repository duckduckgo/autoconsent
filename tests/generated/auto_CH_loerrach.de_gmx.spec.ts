import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_loerrach.de_gmx', ['https://www.loerrach.de/willkommen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
