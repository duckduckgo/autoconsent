import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_hpe.com_2hy', ['https://www.hpe.com/us/en/home.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
