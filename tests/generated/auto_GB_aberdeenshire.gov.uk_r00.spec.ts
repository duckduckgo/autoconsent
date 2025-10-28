import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_aberdeenshire.gov.uk_r00', ['https://www.aberdeenshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
