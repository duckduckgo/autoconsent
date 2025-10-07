import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kulturkaufhaus.de_zzl', ['https://www.kulturkaufhaus.de/en/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
