import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_careers.tuigroup.com_hks', ['https://careers.tuigroup.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
