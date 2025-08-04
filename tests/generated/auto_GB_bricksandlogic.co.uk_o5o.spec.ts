import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bricksandlogic.co.uk_o5o', ['https://www.bricksandlogic.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
