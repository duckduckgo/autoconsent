import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aktion-mensch.de_msn', ['https://www.aktion-mensch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
