import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_belmarresort.com_pmy', ['https://belmarresort.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
