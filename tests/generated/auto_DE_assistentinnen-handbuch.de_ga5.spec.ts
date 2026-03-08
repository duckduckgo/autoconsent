import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_assistentinnen-handbuch.de_ga5', ['https://assistentinnen-handbuch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
