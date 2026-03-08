import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_buffalojackson.com_4qj', ['https://buffalojackson.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
