import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_farfetch.com_4o6', ['https://www.farfetch.com/ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
