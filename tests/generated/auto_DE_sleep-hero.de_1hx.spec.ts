import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sleep-hero.de_1hx', ['https://www.sleep-hero.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
