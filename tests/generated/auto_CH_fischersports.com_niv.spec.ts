import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fischersports.com_niv', ['https://www.fischersports.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
