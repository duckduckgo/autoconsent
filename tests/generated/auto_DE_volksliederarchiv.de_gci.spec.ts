import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volksliederarchiv.de_gci', ['https://www.volksliederarchiv.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
