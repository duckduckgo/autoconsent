import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissquote.com_5ym', ['https://www.swissquote.com/en-ch/private'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
