import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_loveantiques.com_9a2', ['https://www.loveantiques.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
