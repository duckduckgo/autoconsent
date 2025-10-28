import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksliederarchiv.de_ipr', ['https://www.volksliederarchiv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
