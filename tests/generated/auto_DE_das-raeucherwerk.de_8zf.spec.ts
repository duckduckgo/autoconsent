import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_das-raeucherwerk.de_8zf', ['https://das-raeucherwerk.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
