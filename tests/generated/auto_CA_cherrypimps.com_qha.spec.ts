import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cherrypimps.com_qha', ['https://cherrypimps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
