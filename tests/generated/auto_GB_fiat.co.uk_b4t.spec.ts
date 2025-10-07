import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fiat.co.uk_b4t', ['https://www.fiat.co.uk/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
