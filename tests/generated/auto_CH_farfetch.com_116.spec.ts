import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_farfetch.com_116', ['https://www.farfetch.com/ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
