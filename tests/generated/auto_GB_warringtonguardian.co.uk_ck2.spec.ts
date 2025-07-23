import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_warringtonguardian.co.uk_ck2', ['https://www.warringtonguardian.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
