import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bookretreats.com_h7g', ['https://bookretreats.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
