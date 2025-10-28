import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bildungsurlauber.de_fx3', ['https://www.bildungsurlauber.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
