import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rausgegangen.de_037', ['https://rausgegangen.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
