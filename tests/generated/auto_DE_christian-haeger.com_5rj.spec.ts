import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_christian-haeger.com_5rj', ['https://christian-haeger.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
