import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thepeoplespension.co.uk_p35', ['https://thepeoplespension.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
