import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stevensbikes.de_tld', ['https://www.stevensbikes.de/en/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
