import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_teppermans.com_abv', ['https://www.teppermans.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
