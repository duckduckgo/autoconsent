import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_na.finalfantasyxiv.com_zxc', ['https://na.finalfantasyxiv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
