import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_partmaster.co.uk_ree', ['https://www.partmaster.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
