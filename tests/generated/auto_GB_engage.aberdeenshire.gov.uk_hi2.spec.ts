import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_engage.aberdeenshire.gov.uk_hi2', ['https://engage.aberdeenshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
