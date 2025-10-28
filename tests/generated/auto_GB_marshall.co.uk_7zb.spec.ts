import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_marshall.co.uk_7zb', ['https://www.marshall.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
