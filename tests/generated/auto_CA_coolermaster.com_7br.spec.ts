import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_coolermaster.com_7br', ['https://www.coolermaster.com/en-global/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
