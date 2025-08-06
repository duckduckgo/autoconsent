import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oly-forum.com_ewt', ['https://www.oly-forum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
