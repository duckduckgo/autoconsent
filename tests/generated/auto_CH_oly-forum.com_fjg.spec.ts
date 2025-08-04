import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oly-forum.com_fjg', ['https://www.oly-forum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
