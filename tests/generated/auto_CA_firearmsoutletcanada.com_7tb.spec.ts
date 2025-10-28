import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_firearmsoutletcanada.com_7tb', ['https://firearmsoutletcanada.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
