import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_againstdata.com_wrj', ['https://againstdata.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
