import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kingston.com_3hj', ['https://www.kingston.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
