import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_postoffice.co.uk_q6d', ['https://www.postoffice.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
