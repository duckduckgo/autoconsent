import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_festivaloffavignon.com_uck', ['https://www.festivaloffavignon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
