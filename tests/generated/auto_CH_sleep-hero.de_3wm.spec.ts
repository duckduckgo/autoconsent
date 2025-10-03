import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sleep-hero.de_3wm', ['https://www.sleep-hero.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
