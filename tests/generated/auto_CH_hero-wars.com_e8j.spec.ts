import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hero-wars.com_e8j', ['https://www.hero-wars.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
