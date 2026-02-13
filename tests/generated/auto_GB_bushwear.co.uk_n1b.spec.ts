import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bushwear.co.uk_n1b', ['https://www.bushwear.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
