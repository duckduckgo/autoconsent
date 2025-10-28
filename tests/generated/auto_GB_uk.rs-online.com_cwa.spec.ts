import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.rs-online.com_cwa', ['https://uk.rs-online.com/web/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
