import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hgregoire.com_4vq', ['https://www.hgregoire.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
