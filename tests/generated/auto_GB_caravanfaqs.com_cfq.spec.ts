import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_caravanfaqs.com_cfq', ['https://caravanfaqs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
