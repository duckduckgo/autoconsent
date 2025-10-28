import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pensions.gov.scot_vl8', ['https://pensions.gov.scot/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
