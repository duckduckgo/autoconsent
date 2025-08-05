import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_farmfoods.co.uk_0', ['https://www.farmfoods.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
