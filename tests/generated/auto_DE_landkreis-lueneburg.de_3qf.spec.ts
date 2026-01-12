import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-lueneburg.de_3qf', ['https://www.landkreis-lueneburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
