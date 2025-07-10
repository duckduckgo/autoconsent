import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_abelandcole.co.uk_1k6', ['https://www.abelandcole.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
