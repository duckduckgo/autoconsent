import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ikmultimedia.com_v93', ['https://www.ikmultimedia.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
