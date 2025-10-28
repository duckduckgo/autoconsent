import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_playvalorant.com_ktc', ['https://playvalorant.com/de-de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
