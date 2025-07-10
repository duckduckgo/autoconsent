import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_appleinsider.com_h4j', ['https://appleinsider.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
