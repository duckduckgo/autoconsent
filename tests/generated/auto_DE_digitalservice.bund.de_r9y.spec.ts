import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_digitalservice.bund.de_r9y', ['https://digitalservice.bund.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
