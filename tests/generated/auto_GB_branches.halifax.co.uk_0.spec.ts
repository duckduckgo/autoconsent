import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_branches.halifax.co.uk_0', ['https://branches.halifax.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
