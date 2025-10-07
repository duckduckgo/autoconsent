import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mrporter.com_6d2', ['https://www.mrporter.com/en-ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
