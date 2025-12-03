import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_voyage-prive.ch_p09', ['https://www.voyage-prive.ch/login/index'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
