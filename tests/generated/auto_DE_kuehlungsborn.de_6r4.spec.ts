import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kuehlungsborn.de_6r4', ['https://www.kuehlungsborn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
