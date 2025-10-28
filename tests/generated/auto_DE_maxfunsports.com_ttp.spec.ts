import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maxfunsports.com_ttp', ['https://www.maxfunsports.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
