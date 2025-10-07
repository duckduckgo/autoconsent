import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bookretreats.com_fb2', ['https://bookretreats.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
