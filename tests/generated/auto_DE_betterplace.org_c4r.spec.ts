import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_betterplace.org_c4r', ['https://www.betterplace.org/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
