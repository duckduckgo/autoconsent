import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_careers.merckgroup.com_iab', ['https://careers.merckgroup.com/global/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
