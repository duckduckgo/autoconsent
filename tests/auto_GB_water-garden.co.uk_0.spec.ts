import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_water-garden.co.uk_0', ['https://www.water-garden.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
