import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kuehlungsborn.de_9i5', ['https://www.kuehlungsborn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
