import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_allaboutdogfood.co.uk_q3x', ['https://www.allaboutdogfood.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
