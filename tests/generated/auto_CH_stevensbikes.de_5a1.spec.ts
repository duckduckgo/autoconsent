import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stevensbikes.de_5a1', ['https://www.stevensbikes.de/en/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
