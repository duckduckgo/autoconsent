import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fiat.co.uk_cwa', ['https://www.fiat.co.uk/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
