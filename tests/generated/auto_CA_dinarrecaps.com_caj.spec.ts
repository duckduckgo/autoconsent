import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dinarrecaps.com_caj', ['https://dinarrecaps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
