import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fringueefutee.com_2o6', ['https://fringueefutee.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
