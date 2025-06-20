import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_bedandbreakfast.eu_0', ['https://www.bedandbreakfast.eu/en'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
