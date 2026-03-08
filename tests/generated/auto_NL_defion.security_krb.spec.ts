import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_defion.security_krb', ['https://defion.security/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
