import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_whsmithplc.co.uk_fqv', ['https://www.whsmithplc.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
