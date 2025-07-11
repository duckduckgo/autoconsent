import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tractorpartsasap.com_6h0', ['https://www.tractorpartsasap.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
