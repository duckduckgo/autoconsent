import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_utilitabowl.com_c93', ['https://www.utilitabowl.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
