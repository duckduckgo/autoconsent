import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_autoparts.toyota.com_1zo', ['https://autoparts.toyota.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
