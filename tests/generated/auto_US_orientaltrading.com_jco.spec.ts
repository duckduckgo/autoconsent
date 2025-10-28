import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_orientaltrading.com_jco', ['https://www.orientaltrading.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
