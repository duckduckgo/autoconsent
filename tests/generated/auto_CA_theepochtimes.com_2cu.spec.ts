import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_theepochtimes.com_2cu', ['https://www.theepochtimes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
