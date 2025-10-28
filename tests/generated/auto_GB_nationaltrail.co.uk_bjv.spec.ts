import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationaltrail.co.uk_bjv', ['https://www.nationaltrail.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
