import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_utilitabowl.com_0', ['https://www.utilitabowl.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
