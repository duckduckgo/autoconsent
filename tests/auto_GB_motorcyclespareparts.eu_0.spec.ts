import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_motorcyclespareparts.eu_0', ['https://www.motorcyclespareparts.eu/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
