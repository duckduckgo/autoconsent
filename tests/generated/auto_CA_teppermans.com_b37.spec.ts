import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_teppermans.com_b37', ['https://www.teppermans.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
