import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bricksandlogic.co.uk_o5o', ['https://www.bricksandlogic.co.uk/privacy-policy'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
