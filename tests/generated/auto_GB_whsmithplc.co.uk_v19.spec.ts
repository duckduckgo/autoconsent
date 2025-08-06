import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_whsmithplc.co.uk_v19', ['https://www.whsmithplc.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
