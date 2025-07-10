import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mycnhstore.com_ibz', ['https://www.mycnhstore.com/ca/en/default'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
