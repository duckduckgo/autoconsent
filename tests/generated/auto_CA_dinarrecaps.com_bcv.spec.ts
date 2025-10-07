import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_dinarrecaps.com_bcv', ['https://dinarrecaps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
