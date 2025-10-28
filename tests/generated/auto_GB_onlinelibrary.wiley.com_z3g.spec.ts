import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_onlinelibrary.wiley.com_z3g', ['https://onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
