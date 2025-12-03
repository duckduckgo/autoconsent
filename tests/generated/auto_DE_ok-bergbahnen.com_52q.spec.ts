import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ok-bergbahnen.com_52q', ['https://www.ok-bergbahnen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
