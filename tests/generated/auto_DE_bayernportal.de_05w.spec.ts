import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bayernportal.de_05w', ['https://www.bayernportal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
