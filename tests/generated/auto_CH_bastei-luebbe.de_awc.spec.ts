import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bastei-luebbe.de_awc', ['https://bastei-luebbe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
