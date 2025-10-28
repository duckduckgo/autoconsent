import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_goodnotes.com_hue', ['https://www.goodnotes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
