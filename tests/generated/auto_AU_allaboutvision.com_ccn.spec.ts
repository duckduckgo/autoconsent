import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_allaboutvision.com_ccn', ['https://www.allaboutvision.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
