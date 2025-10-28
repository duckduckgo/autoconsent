import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_experian.co.uk_dh7', ['https://www.experian.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
