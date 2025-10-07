import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_voyage-prive.ch_6sb', ['https://www.voyage-prive.ch/login/index'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
