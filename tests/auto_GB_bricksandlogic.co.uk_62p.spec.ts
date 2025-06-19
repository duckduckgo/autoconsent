import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_bricksandlogic.co.uk_62p', ['https://www.bricksandlogic.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
