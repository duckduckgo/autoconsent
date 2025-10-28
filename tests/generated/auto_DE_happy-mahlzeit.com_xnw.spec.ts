import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_happy-mahlzeit.com_xnw', ['https://www.happy-mahlzeit.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
