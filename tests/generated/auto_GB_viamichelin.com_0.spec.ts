import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_viamichelin.com_0', ['https://www.viamichelin.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
