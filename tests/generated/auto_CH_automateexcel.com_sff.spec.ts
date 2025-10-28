import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_automateexcel.com_sff', ['https://www.automateexcel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
