import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_findmymanandvan.co.uk_705', ['https://findmymanandvan.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
