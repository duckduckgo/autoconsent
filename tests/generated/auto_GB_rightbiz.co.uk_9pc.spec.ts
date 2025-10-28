import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rightbiz.co.uk_9pc', ['https://www.rightbiz.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
