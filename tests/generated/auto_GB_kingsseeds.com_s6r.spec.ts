import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kingsseeds.com_s6r', ['https://www.kingsseeds.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
