import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_benq.eu_9ja', ['https://www.benq.eu/de-de/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
