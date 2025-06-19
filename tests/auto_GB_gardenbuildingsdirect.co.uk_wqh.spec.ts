import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_gardenbuildingsdirect.co.uk_wqh', ['https://www.gardenbuildingsdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
