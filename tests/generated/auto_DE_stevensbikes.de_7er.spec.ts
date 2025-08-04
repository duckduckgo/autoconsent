import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stevensbikes.de_7er', ['https://www.stevensbikes.de/en/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
