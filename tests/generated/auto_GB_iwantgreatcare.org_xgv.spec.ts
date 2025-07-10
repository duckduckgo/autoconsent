import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_iwantgreatcare.org_xgv', ['https://www.iwantgreatcare.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
