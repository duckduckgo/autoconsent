import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bananafingers.co.uk_0', ['https://bananafingers.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
