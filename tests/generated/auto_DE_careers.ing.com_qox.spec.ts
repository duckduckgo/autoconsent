import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_careers.ing.com_qox', ['https://careers.ing.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
