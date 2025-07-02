import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bricksandlogic.co.uk_uwr', ['https://www.bricksandlogic.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
