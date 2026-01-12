import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tyreleader.co.uk_c77', ['https://www.tyreleader.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
