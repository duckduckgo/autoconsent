import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_coventrybuildingsociety.co.uk_0', ['https://www.coventrybuildingsociety.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
