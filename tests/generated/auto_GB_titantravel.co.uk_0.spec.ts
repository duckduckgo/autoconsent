import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_titantravel.co.uk_0', ['https://www.titantravel.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
