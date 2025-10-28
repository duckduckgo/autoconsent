import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mailplus.co.uk_j2b', ['https://www.mailplus.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
