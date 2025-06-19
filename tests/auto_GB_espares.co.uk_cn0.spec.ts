import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_espares.co.uk_cn0', ['https://www.espares.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
