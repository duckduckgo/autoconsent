import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_openairtheatre.com_0', ['https://openairtheatre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
