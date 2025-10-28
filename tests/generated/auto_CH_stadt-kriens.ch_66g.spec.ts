import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stadt-kriens.ch_66g', ['https://www.stadt-kriens.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
