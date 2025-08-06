import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tonhallezuerich.ch_qhp', ['https://tonhallezuerich.ch/home-tz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
