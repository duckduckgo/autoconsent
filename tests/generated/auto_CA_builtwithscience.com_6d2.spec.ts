import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_builtwithscience.com_6d2', ['https://builtwithscience.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
