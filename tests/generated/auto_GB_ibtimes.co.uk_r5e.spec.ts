import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ibtimes.co.uk_r5e', ['https://www.ibtimes.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
