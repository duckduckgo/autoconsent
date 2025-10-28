import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_arnoldclark.com_3i6', ['https://www.arnoldclark.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
