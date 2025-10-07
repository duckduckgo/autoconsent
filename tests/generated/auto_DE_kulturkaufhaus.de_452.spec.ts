import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kulturkaufhaus.de_452', ['https://www.kulturkaufhaus.de/en/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
