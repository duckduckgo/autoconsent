import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_autoserve.co.uk_097', ['https://autoserve.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
