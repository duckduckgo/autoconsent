import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_partmaster.co.uk_528', ['https://www.partmaster.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
