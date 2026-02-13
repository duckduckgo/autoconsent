import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterplace.org_257', ['https://www.betterplace.org/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
