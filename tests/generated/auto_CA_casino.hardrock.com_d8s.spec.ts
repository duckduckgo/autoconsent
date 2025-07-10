import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_casino.hardrock.com_d8s', ['https://casino.hardrock.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
