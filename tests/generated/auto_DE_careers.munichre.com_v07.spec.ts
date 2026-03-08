import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_careers.munichre.com_v07', ['https://careers.munichre.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
