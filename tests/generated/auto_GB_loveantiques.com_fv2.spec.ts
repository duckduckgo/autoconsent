import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_loveantiques.com_fv2', ['https://www.loveantiques.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
