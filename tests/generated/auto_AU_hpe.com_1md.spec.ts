import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hpe.com_1md', ['https://www.hpe.com/us/en/home.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
