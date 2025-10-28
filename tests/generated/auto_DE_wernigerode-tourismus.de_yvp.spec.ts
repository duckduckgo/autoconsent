import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wernigerode-tourismus.de_yvp', ['https://www.wernigerode-tourismus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
