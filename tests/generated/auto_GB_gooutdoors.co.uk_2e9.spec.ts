import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gooutdoors.co.uk_2e9', ['https://www.gooutdoors.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
