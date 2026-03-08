import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_der-die-das-deutsch.com_cnb', ['https://der-die-das-deutsch.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
