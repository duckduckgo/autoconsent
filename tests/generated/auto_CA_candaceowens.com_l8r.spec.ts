import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_candaceowens.com_l8r', ['https://candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
