import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_canadataxcalculator.com_wt1', ['https://canadataxcalculator.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
