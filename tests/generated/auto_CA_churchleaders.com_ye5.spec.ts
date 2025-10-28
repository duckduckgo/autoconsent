import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_churchleaders.com_ye5', ['https://churchleaders.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
