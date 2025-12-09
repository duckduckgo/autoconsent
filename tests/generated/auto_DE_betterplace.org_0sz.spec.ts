import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterplace.org_0sz', ['https://www.betterplace.org/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
