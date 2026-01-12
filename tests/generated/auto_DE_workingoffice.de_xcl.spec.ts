import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_workingoffice.de_xcl', ['https://www.workingoffice.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
