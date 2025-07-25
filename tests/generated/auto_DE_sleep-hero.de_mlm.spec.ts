import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sleep-hero.de_mlm', ['https://www.sleep-hero.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
