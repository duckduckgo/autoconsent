import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sportstech.de_587', ['https://www.sportstech.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
